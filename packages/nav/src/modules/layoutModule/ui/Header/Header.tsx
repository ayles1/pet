import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
    className?:string;
    children: ReactNode
}

export const Header = (props:HeaderProps) => {
    const { className, children } = props;
    return (
        <header className={classNames(styles.Header, {}, [className])}>
            {
                children
            }
        </header>
    );
};
