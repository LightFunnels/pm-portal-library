import React from "react";
import { Avatar } from "../avatar";
import { ArrowIcon, CloseIcon } from "../icons";
import styles from "./select-label.module.css";

type SelectLabelProps = {
	disabled?: boolean
	onClick?: (e: any) => void
	onChange: (e: any) => void
	outOfCard?: boolean
	cancellable?: boolean
	selected?: React.ReactNode
	hasImage?: boolean
	image?: string
	label?: React.ReactNode
	labelClassName?: string
	active?: boolean
	medium?: boolean
	refMenu?: React.MutableRefObject<HTMLDivElement>
	// setIsOpen: (a: boolean) => void
	textLabelClassName?: string
	error?: string
}

export const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
	function SelectLabel(props, labelRef) {
		return (
			<div
				onClick={!props.disabled ? props.onClick : undefined}
				className={`${styles.selectLabel}
          ${props.error ? styles.hasError : ""} 
          ${props.labelClassName || ''} ${props.active ? styles.active : ''}  
          ${props.disabled ? styles.disabled : ''} 
          ${props.outOfCard ? styles.outOfCard : ''} 
				 ${props.medium ? styles.medium : ''} `}
			>
				<div className={`${styles.avatar_wrapper} ${props.cancellable && props.selected ? '' : ''}`} ref={labelRef} />
				{
					(props.selected && props.hasImage) && (
						<Avatar className={styles.avatar} src={props.image} />
					)
				}
				<label
					children={
						props.selected || props.label || "Select"
					}
					className={`${styles.label} ${props.medium ? styles.label_medium : ''} ${props.textLabelClassName}`}
				/>
				{
					(props.cancellable && props.selected) ? (
            <CloseIcon
              className={`${styles.closeIcon} ${props.medium ? styles.medium: ''}`}
              onClick={function (event) {
                event.stopPropagation();
                // event.nativeEvent.canceler = (event.nativeEvent.canceler || []).conca( props.refMenu.current );
                props.onChange(null);
              }}
            />
					) : (
            <ArrowIcon
              className={`${styles.arrowIcon} ${props.medium ? styles.medium: ''}`}
            />
					)
				}
			</div>
		)
	}
);
