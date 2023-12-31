import React, { useMemo } from 'react';
import { useAppContext } from '../../../context/useAppContext';
import { useData } from '../../../helpers/customHooks';
import styles from './ExperienceDescription.module.scss';

type RefType = HTMLDivElement;

const ExperienceDescription = React.forwardRef<RefType>((_, ref) => {
    const { selectedExperience } = useAppContext()!;
    const { data } = useData();

    const getSelectedExperience = useMemo(() => {
        if (!selectedExperience) {
            return undefined;
        }
        return data?.experience.experiences.find((experience) => experience.id === selectedExperience);
    }, [selectedExperience, data]);

    if (!getSelectedExperience) {
        return <div className={styles['experience-description']}>No experience selected</div>;
    }

    return (
        <div className={styles['experience-description']} ref={ref}>
            <div className={styles['top-bar']}>
                <div className={styles['top-bar__circle-container']}>
                    <div className={styles['top-bar__circle']}></div>
                    <div className={styles['top-bar__circle']}></div>
                    <div className={styles['top-bar__circle']}></div>
                </div>
                <div className={styles['top-bar__nav']}>{getSelectedExperience.company}</div>
            </div>
            <div className={styles.text}>
                <div className={styles.dates}>
                    <span>
                        From: <span className={styles.dates__value}>{getSelectedExperience.from}</span>
                    </span>
                    <span>
                        To: <span className={styles.dates__value}>{getSelectedExperience.to || 'Present'}</span>
                    </span>
                </div>
                <div>
                    <span className={styles.label}>Where: </span>
                    <a href={getSelectedExperience.url}>{getSelectedExperience.company}</a>
                </div>
                <div>
                    <span className={styles.label}>Location: </span> <span>{getSelectedExperience.location}</span>
                </div>
                <div>
                    <span className={styles.label}>Role: </span> <span>{getSelectedExperience.role}</span>
                </div>
                <div>
                    <span className={styles.label}>Type: </span> <span>{getSelectedExperience.type}</span>
                </div>
                <span>
                    <span className={styles.label}>Description: </span> <span>{getSelectedExperience.description}</span>
                </span>
            </div>
        </div>
    );
});

export default ExperienceDescription;
