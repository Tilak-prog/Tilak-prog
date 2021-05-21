import classNames from 'classnames';
import React, { CSSProperties, SyntheticEvent } from 'react';
import styles from './input.module.scss';

interface Props {
  className?: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
  id: string;
  name: string;
  label?: string;
  value?: string | number;
  style?: CSSProperties;
  onChange: (value: string | number, key: string, e?: SyntheticEvent) => void;
}

export default function Input({
  required,
  minLength,
  maxLength,
  autoComplete,
  className = '',
  style,
  id,
  name,
  label,
  type = 'text',
  placeholder,
  disabled,
  value,
  onChange,
}: Props): JSX.Element {
  return (
    <div
      className={classNames('field', { 'mb-2': !className?.includes('mb-') }, className, styles.wrapper)}
      style={style}>
      {label && (
        <label
          htmlFor={id}
          className={classNames('block mr-2  font-semibold text-dark text-sm', 'label', styles.label, {
            [styles.show]: !!value,
          })}>
          {label}
        </label>
      )}

      <input
        className={classNames('block w-96 text-sm px-4 py-3 outline-none font-bold placeholder-gray-500', styles.input, 'input')}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange(e.target.value, name, e)}
      />
    </div>
  );
}