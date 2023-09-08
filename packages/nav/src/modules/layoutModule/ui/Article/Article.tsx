import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Article.module.scss';

interface ArticleProps {
    className?:string;
    children: ReactNode;
}

export const Article = (props:ArticleProps) => {
    const { className, children } = props;
    return (
        <article className={classNames(styles.Article, {}, [className])}>{children}</article>
    );
};
