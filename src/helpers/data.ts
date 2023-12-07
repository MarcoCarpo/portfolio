import { faAddressBook, faArrowAltCircleLeft, faUser } from '@fortawesome/free-regular-svg-icons';
import { Section } from './interfaces';

export const sections: Section[] = [
    { name: 'Home', icon: faUser },
    { name: 'Experience', icon: faAddressBook },
    { name: 'Skills', icon: faArrowAltCircleLeft },
];
