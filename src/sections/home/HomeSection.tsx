import { useData } from '../../helpers/customHooks';
import Section from '../Section';
import styles from './HomeSection.module.scss';
import CodeEditor from './code-editor/CodeEditor';
import { BeatLoader } from 'react-spinners';

const HomeSection = () => {
    const { isLoading } = useData();

    const numbers = [...Array(25).keys()];

    return (
        <Section className={styles['home-section']}>
            <div className={styles.numbers}>
                {numbers.map((n) => (
                    <span key={n + 1}>{n + 1}</span>
                ))}
            </div>
            {isLoading ? (
                <div className={styles['home-section__loader']}>
                    <BeatLoader color="var(--brackets-col)" size={20} />
                </div>
            ) : (
                <CodeEditor />
            )}
        </Section>
    );
};

export default HomeSection;
