import React, {MouseEventHandler} from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
  to?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ to, children, type = 'button', onClick }: ButtonProps) => {
  return (
    to
      ? <Link to={to} className={styles.button}>{ children }</Link>
      : <button type={type} className={styles.button} onClick={onClick}>{ children }</button>
  )
}

export default Button;
