import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
    className?:string;
    children:ReactNode
}

export const Footer = (props:FooterProps) => {
    const { className, children } = props;
    return (
        <footer className={classNames(styles.Footer, {}, [className])}>{children}</footer>
    );
};
