import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

type CPropsBase = Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> & {
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  error?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  inputWrapperClassName?: string;
  overlayClassName?: string;
  medium?: boolean;
  reachMaxMessage?: string;
  className?: string;
  nopointer?: boolean;
  min?: number;
  max?: number;
  isint?: boolean;
  onChange: (v) => void;
  inputRef?:
    | React.MutableRefObject<HTMLInputElement | null>
    | ((ref: HTMLInputElement | null) => void);
  ref?: React.MutableRefObject<HTMLDivElement>;
};

export type CProps =
  | (CPropsBase & { value: string; type?: "text" | "password" | "email" })
  | (CPropsBase & {
      value: number | string;
      type: "number" | "currency";
      showAdjusters?: boolean;
    });

export const InputComponent = React.forwardRef<HTMLDivElement, CProps>(
  function InputComponent(
    {
      icon,
      leftIcon,
      error,
      wrapperClassName,
      inputClassName,
      medium,
      reachMaxMessage,
      inputRef,
      overlayClassName,
      inputWrapperClassName,
      ...props
    },
    ref
  ) {
    const [showTooltip, setShowTooltip] = React.useState<string | null>(null);
    const inRef = React.useRef<HTMLDivElement>(null);

    const isNumber = props.type === "number";
    const hasAdjusters =
      isNumber && "showAdjusters" in props && props.showAdjusters !== false;

    let value = props.value === null ? "" : props.value;
    let oldValue = React.useRef<any>();

    if (isNumber && oldValue.current == "0" && value != "") {
      value = Number(value).toString();
    }

    let componeProps = props as any;
    if ("showAdjusters" in props) {
      const { showAdjusters, ...newProps } = props as any;
      componeProps = newProps;
    }

    oldValue.current = value;

    const wrapperCn = [
      styles.textInputWrapper,
      wrapperClassName || "",
    ]
      .filter(Boolean)
      .join(" ");

    const innerCn = [
      styles.w1, // keep as-is (no rename)
      error ? styles.hasError : "",
      hasAdjusters ? styles.hasAdjusters: "",
      medium ? styles.medium : "",
      props.disabled ? styles.disabled : "",
      props.disabled ? styles.bgAntiFlash : "", // matches your previous visual intent
      inputWrapperClassName || "",
    ]
      .filter(Boolean)
      .join(" ");

    const inputCn = [
      styles.textInput,
      inputClassName || "",
      error ? styles.hasError : "",
      props.nopointer ? styles.nopointer : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={wrapperCn}>
        <div ref={inRef} className={innerCn}>
          {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

          <input
            {...(componeProps as any)}
            value={value}
            className={inputCn}
            ref={inputRef}
            placeholder={props.placeholder}
          />

          {/* If you still render an overlay elsewhere, keep this hook-up class name */}
          {overlayClassName ? <div className={overlayClassName} /> : null}

          {/* Right icon kept, same behavior as before */}
          {icon && !props.disabled ? <div className="icon">{icon}</div> : null}
        </div>
      </div>
    );
  }
);
