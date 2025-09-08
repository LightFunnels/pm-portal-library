import React, { InputHTMLAttributes } from 'react';
import styles from "./checkbox.module.css";

type CheckboxComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode
  partial?: boolean
  inline?: boolean
  defaultChecked?: boolean
  className?: string
  labelClassName?: string
  checkBoxClassName?: string
}

export function CheckboxComponent({
  partial,
  label,
  className,
  inline,
  defaultChecked,
  labelClassName,
  checkBoxClassName,
  ...props
}: CheckboxComponentProps) {
  return (
    <label 
      className={`${styles.checkbox} ${inline ? styles.inline : "" } ${props.disabled ? styles.disabled : "" } ${label ? styles.hasLabel : ''}
      ${className || ""}`}
    >
      <input 
        type="checkbox" 
        className={`${styles.input}`}
        defaultChecked={defaultChecked}
        {...props} 
      />
      <span className={`${styles.span} 
        ${partial ? styles.partial : ''}
        ${checkBoxClassName ?? ""}`}>
          {props.checked && (
            <CheckIcon className="" />
          )}
      </span>
      {label && <span className={`${styles.checkbox_label} ${labelClassName}`}>{label}</span>}
    </label>
  );
}



function CheckIcon(props: React.HTMLAttributes<HTMLOrSVGElement>){
	return (
		<svg viewBox="0 0 35 27" fill="#fff" xmlns="http://www.w3.org/2000/svg" {...props} width={"12px"}>
			<path fillRule="evenodd" clipRule="evenodd" d="M22.276 10.1116L12.7583 20.2231L7.98223 15.1496L3.2062 10.0761L1.60308 11.7792L0 13.4822L6.3621 20.2411L12.7242 27L23.8621 15.1677L35 3.33531L33.4313 1.66763C32.5685 0.750428 31.8472 0 31.8282 0C31.8093 0 27.5108 4.55018 22.276 10.1116Z" />
		</svg>
	)
}