import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Main.module.scss';

interface MainProps {
    className?:string;
    children: ReactNode;
}

export const Main = (props:MainProps) => {
    const { className, children } = props;
    return (
        <main className={classNames(styles.Main, {}, [className])}>{children}</main>
    );
};
