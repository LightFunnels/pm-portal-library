
import React from "react";
import styles from "./alert.module.css";

type AlertStripeContentProps = {
  className?: string

  icon?: React.ReactNode
  actions?: React.ReactNode
  error?: boolean
  success?: boolean
  warning?: boolean
  info?: boolean
  bottomActions?: React.ReactNode
  label?: React.ReactNode
  message: React.ReactNode
  messageClassname?: string
  setClose?: (v: boolean) => void
  noClose?: boolean
  labelClassName?: string
  actionsClassName?: string
}

export function Alert({ error, warning, info, success, ...props }: AlertStripeContentProps) {
  return(
    <div
      className={`${styles.alert} ${props.className || ''} ${errorPropsToClassNames(
        error,
        warning,
        info,
        success
      )}`}
    >
      <div className={`${styles.iconContentContainer} flex gap-2.5`}>
        {
          props.icon && (
            <div className={`${styles.iconContainer} color`}>
              {
                props.icon
              }
            </div>
          )
        }
        <div className={styles.textContainer}>
          {
            props.label && (
              <div className={`${styles.errTitle} color ${props.labelClassName}`}>
                {props.label}
              </div>
            )
          }
          {
            props.message && (
              <div className={`${styles.errText} ${!props.label ? 'only' : ''} ${props.messageClassname ?? ''}`}>
                {props.message}
              </div>
            )
          }
          {
            props.bottomActions && (
              <div className={styles.bottomActionsContainer}>
                {props.bottomActions}
              </div>
            )
          }
        </div>
      </div>
      {
        props.actions ? (
          <div className={`${styles.actionsContainer} ${props.actionsClassName}`}>
            {props.actions}
          </div>
        ) : (
          (props.setClose && !props.noClose) && (
            <div
              onClick={
                (e) => {
                  if(props.setClose){
                    props.setClose(true);
                  }
                }
              }
            >
              <i className="icon-cancel-music" />
            </div>
          )
        )
      }
    </div>
  )
}


export function errorPropsToClassNames(error, warning, info, success) {
  return `${error ? styles.error : ''} ${warning ? styles.warning : ''} ${info ? styles.info : ''} ${success ? styles.success : ''}`;
}