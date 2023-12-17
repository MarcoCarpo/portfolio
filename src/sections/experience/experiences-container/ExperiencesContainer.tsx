import React from 'react';
import { useData } from '../../../helpers/customHooks';
import { ExperienceItem } from '../../../helpers/interfaces';
import ExperienceItemComponent from '../experience-item/ExperienceItem';
import styles from './ExperiencesContainer.module.scss';

const MemoizedExperienceItem = React.memo(ExperienceItemComponent);

const ExperiencesContainer = ({ handleButtonClick }: { handleButtonClick: () => void }) => {
    const { data } = useData();

    const getOrderedExperiences = (experiences: ExperienceItem[] | undefined): ExperienceItem[] => {
        if (!experiences) {
            return [];
        }

        const newExperiences = [...experiences];

        newExperiences.sort((a, b) => {
            if (a.from > b.from) {
                return -1;
            } else if (a.from < b.from) {
                return 1;
            }
            return 0;
        });

        return newExperiences;
    };

    const isLast = (index: number) => {
        return index === getOrderedExperiences(data?.experience.experiences).length - 1;
    };

    return (
        <div className={styles['experiences-container']} onClick={handleButtonClick}>
            {getOrderedExperiences(data?.experience.experiences).map((experience, index) => {
                return <MemoizedExperienceItem key={index} {...experience} isLast={isLast(index)} />;
            })}
        </div>
    );
};

export default ExperiencesContainer;
