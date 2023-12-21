import {
    ReactOriginal,
    AngularjsOriginal,
    TypescriptOriginal,
    JavascriptOriginal,
    Html5Original,
    Css3Original,
    SassOriginal,
    NpmOriginalWordmark,
    GithubOriginal,
    BitbucketOriginal,
    GitOriginal,
    JiraOriginal,
} from 'devicons-react';
import Section from '../Section';
import SkillsContainer from './skillsContainer/SkillsContainer';
import styles from './SkillSection.module.scss';

const SkillSection = () => {
    return (
        <Section className={styles['skill-section']}>
            <SkillsContainer title={'Mark-up/Style'} icons={[Html5Original, Css3Original, SassOriginal]} />
            <SkillsContainer title={'Languages'} icons={[JavascriptOriginal, TypescriptOriginal]} />
            <SkillsContainer title={'Frameworks/Libraries'} icons={[ReactOriginal, AngularjsOriginal]} />
            <SkillsContainer
                title={'Other tools'}
                icons={[GitOriginal, NpmOriginalWordmark, GithubOriginal, BitbucketOriginal, JiraOriginal]}
            />
        </Section>
    );
};

export default SkillSection;
