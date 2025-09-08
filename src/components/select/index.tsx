import React from "react";
import { sanitizeStringForReg, useToggle } from "../../partial";
import { SelectLabel } from "../select-label";
import { Avatar } from "../avatar";
import { ErrorView } from "../error-view";
import { StaticPopover } from "../popover";
import { Tile } from "../tile";
import { MenuContainer } from "../menu-container";
import styles from "./select.module.css"
import pstyles from "../menu-container/menu-container.module.css"
import { SearchIcon } from "../icons";


export type SelectComponentProps = {
	disabled?: boolean
	className?: string
	options: readonly {
		label: string | React.ReactNode
		value: string | boolean | number | undefined | null,
		thumbnail?: string
		disabled?: boolean
		popoverText?: React.ReactNode
	}[]
	error?: string
	medium?: boolean
	onChange: (v: any) => void
	value: SelectComponentProps["options"][number]["value"] | null
	cancellable?: boolean
	label?: React.ReactNode
	labelClassName?: string
	actionLink?: React.ReactNode,
	isSearchable?: boolean
  customLabel?: React.ReactNode
}

export const SelectComponent = React.forwardRef<HTMLDivElement, SelectComponentProps>(function (
	{ className, options, error, medium, ...props },
	_ref
) {
	let [ref, refMenu, active, setIsOpen] = useToggle();
	let selected = options.find(option => option.value === props.value);

	let ref1 = React.useRef<{ [key: string]: HTMLDivElement | null }>({});
	let inputRef = React.useRef<HTMLInputElement>(null);

	React.useEffect(
		function () {
			if (active) {
				let elm = ref1.current[mapValueToKey(props.value)];
				if (elm) {
					elm.parentElement!.scrollTop = elm.offsetTop - (props.isSearchable ? 36 : 0);
				}
			}
		},
		[active]
	);

	React.useEffect(() => {
		if (props.isSearchable && active) {
			inputRef.current!.focus();
		}
	}, [props.isSearchable, active]);

	function mapValueToKey(v: any): string {
		if (v === undefined) {
			return 'undefined';
		} else if (v === null) {
			return 'null';
		} else {
			return v.toString();
		}
	}

	const [query, setQuery] = React.useState('');
	const Reg = new RegExp(sanitizeStringForReg(query), 'ig');

	function filterSearch(input: string) {
		return !query || input.match(Reg);
	}

	const [target, setTarget] = React.useState<{ element: HTMLDivElement; message: React.ReactNode } | null>(null);

	return (
		<div className={`${styles.select} ${className ?? ''}`} ref={_ref}>
			{props.customLabel ? (
				<div ref={ref}>{props.customLabel}</div>
			) : (
				<SelectLabel selected={selected?.label} {...props} ref={ref} active={active} medium={medium} />
			)}

			{active && (
				<MenuContainer
					ref={refMenu}
					onClick={(e: any) => {
						if (props.isSearchable && refMenu && typeof refMenu !== 'function') {
							e.nativeEvent.canceler = (e.nativeEvent.canceler || []).concat(refMenu.current);
						}
					}}
				>
					{/* Search input */}
					{props.isSearchable && (
						<div className={pstyles.inputContainer}>
              <SearchIcon className={styles.searchIcon}/>
							<input
								type="text"
								value={query}
								className={pstyles.input}
								onChange={e => setQuery(e.target.value)}
								placeholder="Search"
								ref={inputRef}
							/>
						</div>
					)}

					{/* Options list */}
					<div className={pstyles.selectItemsContainer}>
						{options
							.filter(el => {
								let searchValue = el.value?.toString() ?? '';
								if (typeof el.label === 'string') {
									searchValue += el.label.toString();
								}
								return filterSearch(searchValue);
							})
							.map(option => (
								<div
									key={option.value + '-' + option.label}
									ref={e => {
										ref1.current[mapValueToKey(option.value)] = e;
									}}
									onMouseEnter={
										option.popoverText
											? e => {
													setTarget({
														element: e.currentTarget,
														message: option.popoverText,
													});
											  }
											: undefined
									}
									onMouseLeave={
										!option.popoverText
											? undefined
											: () => {
													setTarget(null);
											  }
									}
									className={`${pstyles.option} ${selected === option ? pstyles.selectedOption : ''} ${
										option.disabled ? pstyles.disabled : ''
									}`}
									onClick={
										!option.disabled
											? () => {
													props.onChange(option.value);
													if (props.isSearchable) {
														setIsOpen(false);
														setQuery('');
													}
											  }
											: undefined
									}
								>
									<Tile
										centered
										icon={option.thumbnail ? <Avatar className={styles.thumbnail} src={option.thumbnail} /> : undefined}
										children={<span>{option.label}</span>}
										tileBodyClassName={styles.tileBody}
									/>
								</div>
							))}
						{props.actionLink}
					</div>
				</MenuContainer>
			)}

			{/* Error View */}
			<ErrorView error={error} />

			{/* Popover for message */}
			{target && (
				<StaticPopover
					target={{ current: target.element }}
					placement="left"
				>
					<div className={styles.popoverContent}>{target.message}</div>
				</StaticPopover>
			)}
		</div>
	);
});