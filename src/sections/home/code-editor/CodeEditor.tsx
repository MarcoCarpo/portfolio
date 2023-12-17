import React, { useEffect } from 'react';
import styles from './CodeEditor.module.scss';
import TypeAnimation from 'react-typing-sequence';
import { useData } from '../../../helpers/customHooks';
import { useAppContext } from '../../../context/useAppContext';

const CodeEditor = React.memo(() => {
    const { data, isLoading } = useData();
    const { setSkipAnimation, skipAnimation } = useAppContext()!;

    const openTag = (tag: string, isClose = false, className: string, tabs: string) => [
        {
            content: tabs + '<',
            className: styles.brackets,
            tag: 'span',
            key: tag + '1' + isClose,
        },
        {
            content: tag,
            className: styles[className],
            tag: 'span',
            key: tag + '2' + isClose,
        },
        {
            content: isClose ? '/>' : '>',
            className: styles.brackets,
            tag: 'span',
            key: tag + '3' + isClose,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSkipAnimation();
        }, 15000);
    }, [setSkipAnimation]);

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!data) {
        return <div>Something went wrong</div>;
    }

    const textSequence = [
        ...openTag('Frontend.Developer', false, 'main', ''),
        {
            content: '\n\t<!-- Hello, my name is :) -->',
            className: styles.comment,
            tag: 'pre',
            delay: 40,
        },
        ...openTag('name', false, 'name', '\t'),
        {
            content: data.bio.name,

            tag: 'span',
        },
        ...openTag('name', true, 'name', ''),
        {
            content: '\n\t<!-- Find me on social media :) -->',
            className: styles.comment,
            tag: 'pre',
        },
        ...openTag('Social', false, 'main', '\t'),
        ...openTag('Linkedin', false, 'linkedin', '\n\t\t'),
        {
            content: data.bio.social.linkedin,
            tag: 'a',
            href: data.bio.social.linkedin,
            target: '_blank',
        },
        ...openTag('Linkedin', true, 'linkedin', ''),
        ...openTag('Github', false, 'github', '\n\t\t'),
        {
            content: data.bio.social.github,
            tag: 'a',
            href: data.bio.social.github,
            target: '_blank',
        },
        ...openTag('Github', true, 'github', ''),
        ...openTag('Social', true, 'main', '\n\t'),
        {
            content: '\n',
            className: styles.comment,
            tag: 'span',
        },
        ...openTag('Based.In', false, 'main', '\t'),
        ...openTag('city', false, 'name', '\n\t\t'),
        {
            content: data.bio.location.city,

            tag: 'span',
        },
        ...openTag('city', true, 'name', ''),
        ...openTag('country', false, 'name', '\n\t\t'),
        {
            content: data.bio.location.country,

            tag: 'span',
        },
        ...openTag('country', true, 'name', ''),
        ...openTag('Based.In', true, 'main', '\n\t'),
        {
            content: '\t<!-- Where history meets the stunning embrace of the Adriatic Sea -->',
            className: styles.comment,
            tag: 'pre',
        },
        {
            content: '\n\t<!-- Contact me! -->',
            className: styles.comment,
            tag: 'pre',
        },
        ...openTag('Contacts', false, 'main', '\t'),
        ...openTag('phone', false, 'name', '\n\t\t'),
        {
            content: `${data.bio.contacts.mobile.prefix} ${data.bio.contacts.mobile.number}`,
            tag: 'a',
            href: `tel:${data.bio.contacts.mobile.number}`,
            target: '_blank',
        },
        ...openTag('phone', true, 'name', ''),
        ...openTag('email', false, 'name', '\n\t\t'),
        {
            content: data.bio.contacts.email,

            tag: 'a',
            href: `mailto:${data.bio.contacts.email}`,
            target: '_blank',
        },
        ...openTag('email', true, 'name', ''),
        ...openTag('Contacts', true, 'main', '\n\t'),
        ...openTag('Frontend.Developer', true, 'main', '\n\n'),
    ].map((item) => ({ ...item, delay: skipAnimation ? 0 : 20 }));

    return (
        <div className={styles['code-editor']}>
            <TypeAnimation text={textSequence} />
        </div>
    );
});

export default CodeEditor;
