import { BeatLoader } from 'react-spinners';
import Section from '../Section';
import ExperienceDescription from './experience-description/ExperienceDescription';
import ExperiencesContainer from './experiences-container/ExperiencesContainer';
import styles from './ExperienceSection.module.scss';
import { useData } from '../../helpers/customHooks';
import { useRef } from 'react';

const ExperienceSection = () => {
    const { isLoading } = useData();

    const experienceDescriptionRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        if (experienceDescriptionRef.current) {
            experienceDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section className={styles.experience}>
            {isLoading ? (
                <div className={styles['home-section__loader']}>
                    <BeatLoader color="var(--brackets-col)" size={20} />
                </div>
            ) : (
                <>
                    <ExperiencesContainer handleButtonClick={handleButtonClick} />
                    <ExperienceDescription ref={experienceDescriptionRef} />
                </>
            )}
        </Section>
    );
};

export default ExperienceSection;
