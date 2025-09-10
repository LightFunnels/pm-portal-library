import React from "react";
import styles from "./form-group.module.css"

type FormGroupProps = {
	label?: React.ReactNode
	light?: boolean
	className?: string
	children: React.ReactNode
	customLabel?: string
	action?: React.ReactNode
}

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(({ label, light, ...props }: FormGroupProps, ref) => {
	return (
		<div className={`${styles.form_wrapper} ${props.className || ""}`} ref={ref}>
			{label && <Label className={props.customLabel} light={light} action={props.action}>{label}</Label>}
			{props.children}
		</div>
	)
});


type LabelProps = {
	light?: boolean
	className?: string
	children?: React.ReactNode
	action?: React.ReactNode
}

function Label({light, ...props}: LabelProps) {
	return (
		<div className={styles.label}>
			<label {...props} className={(props.className || '') + ' ' + (light ? 'light' : '')} />
			{props.action}
		</div>
	);
}
