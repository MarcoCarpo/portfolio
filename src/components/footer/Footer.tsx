import { faGithub, faInstagram, faLinkedin, faResearchgate, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '..';
import { useData } from '../../helpers/customHooks';
import styles from './Footer.module.scss';

const icons = [faGithub, faLinkedin, faInstagram, faTwitter, faResearchgate];
const Footer = () => {
    const { data } = useData();

    return (
        <div className={styles.footer}>
            <span className={styles.footer__icons}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </span>
            <span>
                Hello, I’m <span className={styles.footer__name}>{data?.bio.name}</span>, a web developer from Trieste,
                Italy! Welcome on my portfolio! © 2023, All right reserved.
            </span>
        </div>
    );
};

export default Footer;
