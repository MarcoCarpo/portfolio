import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface Props {
    children: ReactNode;
    className?: string;
}

const Section = ({ children, className }: Props) => {
    return <div className={styles.section + ' ' + className}>{children}</div>;
};

export default Section;
