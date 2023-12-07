import { useData } from '../../helpers/customHooks';
import styles from './Footer.module.scss';

const Footer = () => {
    const { data } = useData();

    return <div className={styles.footer}>© 2023 {data?.bio.name}, All right reserved.</div>;
};

export default Footer;
