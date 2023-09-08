import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Heading.module.scss';

interface HeadingProps {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: string
}

/**
 * Renders a heading element with the specified variant.
 *
 * @param {HeadingProps} props - The props object containing the className, variant, and children.
 * @return {ReactNode} The heading element with the specified variant.
 */
export const Heading = (props: HeadingProps): ReactNode => {
    const { className, variant, children } = props;
    const headingClass = classNames(styles.Heading, {}, [className]);
    switch (variant) {
    case 'h1':
        return <h1 className={headingClass}>{children}</h1>;
    case 'h2':
        return <h2 className={headingClass}>{children}</h2>;
    case 'h3':
        return <h3 className={headingClass}>{children}</h3>;
    case 'h4':
        return <h4 className={headingClass}>{children}</h4>;
    case 'h5':
        return <h5 className={headingClass}>{children}</h5>;
    case 'h6':
        return <h6 className={headingClass}>{children}</h6>;
    default:
        return null;
    }
};
