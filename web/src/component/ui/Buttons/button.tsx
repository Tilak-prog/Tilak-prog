import classNames from 'classnames';
import React, { SyntheticEvent } from 'react';
import styles from './button.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: (event: SyntheticEvent) => void;
  type?: 'button' | 'submit';
  className?: string;
  primary?: boolean;
  announcement?:boolean;
  link?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  upload?: boolean;
}

export default function Button({
  className,
  type,
  primary,
  secondary,
  announcement,
  link,
  upload,
  disabled,
  onClick,
  children,
}: Props): JSX.Element {
  const classes = {
    [styles.btn]: true,
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.announcement]: announcement,
    [styles.link]: link,
    [styles.upload]: upload,
  };
          
  return (
    <button
      type={type}
      className={classNames(
        classes,
        className,
        'py-2 transition-all duration-200 ease-in px-5 rounded font-semibold whitespace-nowrap',
      )}
      disabled={disabled}
      onClick={onClick}>
      <span className={classNames('flex text-sm tracking-wide items-center ')}>{children}</span>
    </button>
  );
}