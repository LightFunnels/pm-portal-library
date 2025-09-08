import type { Instance, Placement } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import React from "react";

export type UseToggleOpts = {
	state?: boolean
	key?: any
	disabled?: boolean
	placement?: Placement
}

type UseToggleReturn = [
	React.MutableRefObject<HTMLDivElement | null>,
	React.MutableRefObject<HTMLDivElement | null>,
	boolean,
	(state: boolean) => void,
	React.MutableRefObject<Instance | null>
];

export function useToggle(options: UseToggleOpts = {}, offset?: [number, number]): UseToggleReturn {
	let [isOpen, setIsOpen] = React.useState<boolean>(options.state || false);
	let ref = React.useRef<HTMLDivElement | null>(null);
	let refMenu = React.useRef<HTMLDivElement | null>(null);
	let popper = React.useRef<Instance | null>(null);

	React.useEffect(
		function () {
			if (options.disabled) {
				return;
			}
			let btnClick: (() => void) | undefined, 
			    documentClick: ((event: any) => void) | undefined, 
			    tm: NodeJS.Timeout | undefined;

			// if the modal is already open
			if (isOpen) {
				if (!ref.current || !refMenu.current) {
					throw new Error('missing one of ref, refMenu');
				}
				refMenu.current.style.minWidth = ref.current.offsetWidth + "px";
				
				let opts: {
					placement?: Placement;
					modifiers?: any[];
					onFirstUpdate?: () => void;
				} = {
					modifiers: [
						{
							name: 'offset',
							options: {
								offset: offset ?? [0, 8]
							}
						},
						{
							name: 'preventOverflow',
							options: {
								altAxis: true,
								padding: 10, // Set the spacing between the popper and screen edges
							}
						},
					]
				};
				
				if (options.placement) {
					opts.placement = options.placement;
				}
				
				popper.current = createPopper(
					ref.current,
					refMenu.current,
					opts
				);
				
				// click event handler
				documentClick = function (event: any) {
					if (
						// ignore input, load more button clicks
						// (event.canceler === refMenu.current)						
						event.canceler?.includes(refMenu.current)
					) {
						return;
					}
					setIsOpen(false);
				}

				tm = setTimeout(
					function () {
						document.addEventListener('click', documentClick!)
					}
				);

			} else {
				btnClick = () => setIsOpen(true);
				if (ref.current) {
					ref.current.addEventListener('click', btnClick)
				}
			}

			return () => {
				if (tm) {
					clearTimeout(tm);
				}
				if (popper.current) {
					popper.current.destroy();
					popper.current = null;
					if (documentClick) {
						document.removeEventListener('click', documentClick);
					}
				}
				if (btnClick && ref.current) {
					ref.current.removeEventListener('click', btnClick)
				}
			}
		},
		[isOpen, options.key, options.disabled, options.placement, offset]
	);

	return [
		ref,
		refMenu,
		isOpen,
		setIsOpen,
		popper
	];
}

export function sanitizeStringForReg(q: string){
  return q.replace(/\\/g, "");
}