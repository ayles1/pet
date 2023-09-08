import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?:string;
    children:ReactNode
}

export const Navbar = (props:NavbarProps) => {
    const { className, children } = props;
    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            {children}
        </nav>
    );
};
