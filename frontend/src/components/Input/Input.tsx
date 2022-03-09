import React from 'react';
import classes from 'classnames';
import styles from './Input.module.scss';

const Input = ({ onChange, type = 'text', className = '', ...props }) => {
  return (
    <input type={type} onChange={onChange} className={classes(styles.input, className)} {...props} />
  )
}

export default Input;
