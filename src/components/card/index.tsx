import React from "react";
import styles from "./card.module.css";


type CardProps = {
  title: string
  testModeElement?: React.ReactNode
  thumbnail?: string
  description?: string
  children?: React.ReactNode
  className?: string
}
export function Card(props: CardProps){
  return(
    <div className={`${styles.card} ${props.className ?? ""}`}>
      <div className={styles.header}>
        <div className={styles.title_wrapper}>
          {
            props.thumbnail && (
              <img src={props.thumbnail} alt="payment method thumbnail" className={styles.image}/>
            )
          }
          <span className="title">{props.title}</span>

        </div>
        {
          props.testModeElement && props.testModeElement
        }
      </div>
      {
        props.description && (
          <p className={styles.paragraph}>{props.description}</p>
        )
      }
      {
        props.children
      }
    </div>
  )
}
