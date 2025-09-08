import React, { Fragment } from 'react';
import styles from './avatar.module.css';

type Props = {
  src: string|undefined|null
  rounded?: boolean
  roundedxl?: boolean
  hasTransparent?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: (e: any) => void
  overlay?: React.ReactNode
  imageClassName?: string
}

export function Avatar({
  rounded,
  roundedxl,
  src,
  children,
  hasTransparent,
  overlay,
  imageClassName,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${styles.avatar} ${rounded ? styles.rounded : ''} ${roundedxl ? styles.roundedxl : ''} ${props.className || ''}`}
    >
      <img
        className={styles.placeHolder}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8+R8AAvcB+vBGZskAAAAASUVORK5CYII="
        alt="placeholder"
      />
      {src ? (
        <Fragment>
          <img src={src} className={`${styles.image} ${imageClassName || ''}`} alt="avatar" />
          {overlay}
        </Fragment>
      ) : (
        <i className={`${styles.icon} icon-placeholder-image`} />
      )}
      {children}
    </div>
  );
}
