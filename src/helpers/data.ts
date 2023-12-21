import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Section } from './interfaces';
import { faCodeBranch, faCode, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export const sections: Section[] = [
    { name: 'Home', icon: faUser },
    { name: 'Experience', icon: faCodeBranch },
    { name: 'Skills', icon: faCode },
    { name: 'About Me', icon: faUserAstronaut },
];
