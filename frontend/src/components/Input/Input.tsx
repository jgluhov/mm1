import React from 'react';
import classes from 'classnames';
import styles from './Input.module.scss';

const Input = ({ onChange, type = 'text', className = '', ...props }) => {
  return (
    <input type={type} onChange={onChange} {...props} className={classes(styles.input, className)} />
  )
}

export default Input;
