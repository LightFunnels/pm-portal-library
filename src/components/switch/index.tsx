import React from 'react';
import styles from './switch.module.css';

export type SwitchComponentProps = {
	defaultValue?: boolean
	className?: string
	label?: React.ReactNode
	value: boolean
	onChange: ((v: any) => void)
	name?: string | string[]
	disabled?: boolean
	small?: Boolean
	labelclass?: string
  direction?: "ltr" | "rtl"
}

export const SwitchComponent = React.forwardRef<HTMLLabelElement, SwitchComponentProps>(
	function SwitchComponent({ defaultValue, value, small,direction, ...props }, ref) {
		return (
			<label
				ref={ref}
				className={`${styles.switch} ${props.disabled ? styles.disabled : ''} ${props.className || ''} ${small ? styles.small : ''} ${direction === "rtl" ? styles.reversed : "" }`}
			>
				<span>
					<input
						{...props}
						name={props.name?.toString()}
						checked={value}
						className={styles.checkbox}
						type="checkbox"
					/>
					<span className={styles.bar} />
				</span>
				{props.label && (
					<span
						className={`${styles.switchLabel} ${props.labelclass || ''}`}
					>
						{props.label}
					</span>
				)}
			</label>
		);
	}
);

