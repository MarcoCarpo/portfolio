import IMAGES from '../../assets/images/Images';
import styles from './AboutMeSection.module.scss';

const AboutMeSection = () => {
    return (
        <div className={styles['about-me']}>
            <div className={styles['profile-image']}>
                <img src={IMAGES.profilePicture} />
            </div>
            <div>
                I am a passionate <strong>developer</strong> specializing in frontend technologies, with skills in{' '}
                <strong>React</strong>
                and <strong>Angular</strong>. I graduated in <strong>Natural Science</strong> for my bachelor&apos;s
                degree and later completed a master&apos;s in <strong>Global Change Ecology</strong> at the University
                of Trieste. I carry on a dual passion for both computer science and nature.
                <br />
                Currently, I have been working in the IT sector as a Web Developer, contributing to the success of the
                projects I am involved in. I have collaborated on relevant projects, using <strong>Agile</strong>{' '}
                methodologies to ensure efficient and flexible project management.
                <br />
                <strong>Goals</strong>: I am motivated to pursue continuous growth in the field of web development, with
                a particular focus on the frontend. My ambition is to constantly expand my technical skills and deepen
                my understanding of the latest trends in the frontend world, aiming to deliver increasingly innovative
                solutions.
            </div>
        </div>
    );
};

export default AboutMeSection;
