import { faGithub, faInstagram, faLinkedin, faResearchgate, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '..';
import { useData, useIubenda } from '../../helpers/customHooks';
import styles from './Footer.module.scss';
import { Helmet } from 'react-helmet';

const Footer = () => {
    const { data } = useData();
    const icons = [
        { icon: faGithub, link: data?.bio.social.github },
        { icon: faLinkedin, link: data?.bio.social.linkedin },
        { icon: faInstagram, link: data?.bio.social.instagram },
        { icon: faTwitter, link: data?.bio.social.twitter },
        { icon: faResearchgate, link: data?.bio.social.researchGate },
    ];

    const { CookiePolicy, PrivacyPolicy } = useIubenda();

    return (
        <div className={styles.footer}>
            <span className={styles.footer__icons}>
                {icons.map((icon, index) => (
                    <Icon
                        key={index}
                        icon={icon.icon}
                        onClick={() => {
                            if (icon.link) {
                                window.open(icon.link, '_blank');
                            }
                        }}
                    />
                ))}
            </span>

            <span>
                Hello, I’m <span className={styles.footer__name}>{data?.bio.name}</span>, a web developer from Trieste,
                Italy! Welcome on my portfolio! © {new Date().getFullYear()}, All right reserved. <CookiePolicy /> |{' '}
                <PrivacyPolicy />
            </span>
        </div>
    );
};

export default Footer;
