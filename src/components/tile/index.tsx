import React from 'react';
import styles from "./tile.module.css"

type Props = {
  centered?: boolean
  className?: string
	tileBodyClassName?: string
  onClick?: (e: any) => void
  icon?: React.ReactNode
  children?: React.ReactNode
  action?: React.ReactNode
}

export function Tile({ centered, className, ...props }: Props) {
  return (
    <div
    	className={`${styles.tile} ${centered ? styles.centered : ""} ${className || ""} `}
    	onClick={props.onClick}
  	>
      {props.icon && <div className="tile-icon">{props.icon}</div>}
      {props.children && <div className={`${styles.tile_content} ${props.tileBodyClassName ?? ''}`}>{props.children}</div>}
      {props.action && <div className="tile-action">{props.action}</div>}
    </div>
  );
}
