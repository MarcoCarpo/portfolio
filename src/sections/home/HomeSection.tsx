import { useData } from '../../helpers/customHooks';
import Section from '../Section';
import styles from './HomeSection.module.scss';

const HomeSection = () => {
    const { data } = useData();
    return <Section className={styles['home-section']}>{data?.bio.birthday}</Section>;
};

export default HomeSection;
