import React, {ButtonHTMLAttributes} from 'react';

import styles from "./button.module.css";

export type BaseButtonProps = {
	onCard?: boolean
	tertiary?: boolean
	primary?: boolean
	danger?: boolean
	className?: string
	highlighted?: boolean
	centered?: boolean
	block?: boolean
	medium?: boolean
	small?: boolean
	spinning?: boolean
	disabled?: boolean
	children: React.ReactNode
	link?: boolean
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	function Button({
		onCard,
		tertiary,
		primary,
		danger,
		className,
		highlighted,
		centered,
		block,
		medium,
		small,
		link,
		spinning,
		disabled,
		...props
	}, ref) {
		return (
			<button
				{...props}
				disabled={disabled}
				onClick={spinning ? undefined : props.onClick}
				ref={ref}
				className={`
          ${styles.button} 
          ${buttonPropsToClassNames({
          tertiary,
          primary,
          danger,
          className,
          highlighted,
          centered,
          medium,
          small,
          link,
          spinning,
          onCard
        })}`}
			/>
		);
	}
)

export function buttonPropsToClassNames({
  tertiary = false,
  primary = false,
  danger = false,
  className = '',
  highlighted = false,
  centered = false,
  medium = false,
  small = false,
  link = false,
  spinning = false,
  onCard = false,
  block = false
}: {
  tertiary?: boolean;
  primary?: boolean;
  danger?: boolean;
  className?: string;
  highlighted?: boolean;
  centered?: boolean;
  block?: boolean;
  medium?: boolean;
  small?: boolean;
  link?: boolean;
  spinning?: boolean;
  onCard?: boolean;
} = {}) {
  const classes = [
    // Apply base styles only if no specific style is selected
    onCard && styles.onCard,
    primary && styles.primary,
    tertiary && styles.tertiary,
    danger && !highlighted && styles.danger,
    !primary && !tertiary && !danger && styles.dark_spinner,
    centered && styles.centered,
    medium && styles.medium,
    small && styles.small,
    link && styles.link,
    spinning && styles.spinning,
    block && styles.block,
    className,
  ];

  return classes.filter(Boolean).join(' ');
}
