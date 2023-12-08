import { faGithub, faInstagram, faLinkedin, faResearchgate, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '..';
import { useData } from '../../helpers/customHooks';
import styles from './Footer.module.scss';

const Footer = () => {
    const { data } = useData();

    return (
        <div className={styles.footer}>
            <span className={styles.footer__icons}>
                <Icon icon={faGithub} size={25} />
                <Icon icon={faLinkedin} size={25} />
                <Icon icon={faInstagram} size={25} />
                <Icon icon={faTwitter} size={25} />
                <Icon icon={faResearchgate} size={25} />
            </span>
            <span>
                © 2023 <span className={styles.footer__name}>{data?.bio.name}</span>, All right reserved.
            </span>
        </div>
    );
};

export default Footer;
