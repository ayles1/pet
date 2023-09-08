import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    className?:string;
    children:ReactNode
    type?:'submit' | 'reset' | 'button'
}

export const Button = (props:ButtonProps) => {
    const { className, children, type = 'button' } = props;
    return (
        <button type={type} className={classNames(styles.Button, {}, [className])}>{children}</button>
    );
};
