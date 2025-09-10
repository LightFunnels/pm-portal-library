import React from 'react';

import styles from './spinner.module.css';

export function Spinner(props: {className?: string, medium?: boolean}) {
  return (
    <div className={styles.spinning + ' ' + (props.className || '') + ' ' + (props.medium ? "medium" : "") } />
  )
}