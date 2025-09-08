import React from "react";
import { createPortal } from "react-dom";
import styles from "./menu-container.module.css"

export const MenuContainer = React.forwardRef<HTMLDivElement, { onClick?: (ev: any) => void, className?: string, children: React.ReactNode }>(
	function (props, menuRef) {
		return (
			createPortal(
        <div 
          ref={menuRef}
          {...props} 
          className={styles.menu + " "+ (props.className || '')} >
          {props.children}
        </div>,
        (window as any).modals
      )
		)
	}
);