import React, {Fragment} from 'react'
import { SwitchComponent } from '../switch';
import { usePopover } from '../select';
import { Spinner } from '../spinner';
import { StaticPopover } from '../popover';
import styles from "./sub-payment-card.module.css"

type SubPaymentCardProps = {
  thumbnail?: string,
  value
  onChange:(a?: any, b?:any) => void
  disabled?: boolean
  isLoading?: boolean
  label: string
  className?: string
}

export function SubPaymentCard(props: SubPaymentCardProps) {
  // const [target, show] = usePopover({
	// 	disabled: props.disabled
	// });
  return (
    <div
      className={`${styles.main} ${props.className ?? ""}`} 
    >
      <div className={styles.head}>
        <div className="w-6 h-6 flex items-center justify-center">
          {
            props.thumbnail && (
              <img src={props.thumbnail} alt="payment method thumbnail" className={styles.thumbnail} />
            )
          }
        </div>
        <Fragment>
          {
            props.isLoading &&
            <Spinner className={styles.spinner} />
          }
          <SwitchComponent
            small
            value={props.value}
            // ref={target}
            onChange={props.onChange}
          />
          {/* {
            show && (
              <StaticPopover target={target}>
                You must have at least one payment method selected
              </StaticPopover>
            )
          } */}
        </Fragment>
      </div>

      <div className={styles.label}>{props.label}</div>
    </div>
  )
}
