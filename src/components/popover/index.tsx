import React from 'react';
import styles from './popover.module.css';
import { createPopper, type Placement } from '@popperjs/core';

export interface StaticPopoverProps {
  target: React.MutableRefObject<HTMLElement>
  placement?: Placement
  // parentOverflowEnabled?: boolean
  className?: string
  arrowClassName?: any
  children: React.ReactNode
  offset?: [number, number],
  hideArrow?: boolean
}

export const StaticPopover = React.forwardRef<HTMLDivElement, StaticPopoverProps>(
  function (
    {
      target,
      placement,
      className,
      arrowClassName,
      children,
      offset,
      hideArrow,
      ...props
    },
    ref
  ) {
    const refPopover = React.useRef<HTMLDivElement | null>(null);
    const refArrow = React.useRef<HTMLDivElement | null>(null);

    React.useLayoutEffect(() => {
      if (!target.current || !refPopover.current) return;

      const popperInstance = createPopper(target.current, refPopover.current, {
        placement: placement || "bottom",
        modifiers: [
          {
            name: "arrow",
            options: { element: refArrow.current },
          },
          {
            name: "offset",
            options: { offset: offset ?? [0, 10] },
          },
        ],
      });

      return () => {
        popperInstance.destroy();
      };
    }, [target, placement, offset]);

    return (
      <div
        {...props}
        className={`${styles.popover} z-10 ${className || ""}`}
        ref={(el) => {
          refPopover.current = el;
          if (ref && typeof ref === "function") {
            ref(el);
          } else if (ref && "current" in ref) {
            ref.current = el;
          }
        }}
      >
        {!hideArrow && (
          <div className={styles.arrow} ref={refArrow}>
            <div className={`${styles.visual} ${arrowClassName || ""}`}></div>
          </div>
        )}
        {children}
      </div>
    );
  }
);