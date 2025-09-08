import React from 'react';
import styles from './error-view.module.css';

type Props = {
	error?: string
}
export function ErrorView(props: Props) {
	return props.error ? <div className={styles.error} children={props.error} /> : null;
}