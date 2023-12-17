import { useEffect, useState } from 'react';
import { Icon } from '../../../components';
import { useAppContext } from '../../../context/useAppContext';
import { ExperienceItem } from '../../../helpers/interfaces';
import styles from './ExperienceItem.module.scss';
import { faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';

interface Props extends ExperienceItem {
    isLast: boolean;
}
const ExperienceItemComponent = ({ from, to, company, role, location, type, isLast, url, id }: Props) => {
    const { setSelectedExperience } = useAppContext()!;
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
        if (isOver) {
            setSelectedExperience(id);
        }
    }, [isOver]);

    return (
        <div
            onMouseOver={() => {
                setIsOver(true);
            }}
            onMouseLeave={() => {
                setIsOver(false);
            }}
            className={`${styles[`experience-item`]} ${isLast ? styles[`experience-item--is-last`] : ''} ${
                type === 'education' ? styles[`experience-item--education`] : styles[`experience-item--work`]
            } ${isOver ? styles[`experience-item--is-over`] : ''}`}
        >
            <span className={styles['experience-item__icon']}>
                <Icon icon={type === 'education' ? faGraduationCap : faCode} size={20} />
            </span>
            <span className={styles['experience-item__text']}>
                <span className={styles['experience-item__date']}>
                    {from} - {to || 'Present'}
                </span>
                <span>{role}</span> -{' '}
                <a href={url} target="_blank" rel="noreferrer">
                    {company}
                </a>{' '}
                <span>({location})</span>
            </span>
        </div>
    );
};

export default ExperienceItemComponent;
