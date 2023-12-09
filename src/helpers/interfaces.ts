import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Location {
    city: string;
    country: string;
}

interface MobileContact {
    number: string;
    prefix: string;
}

interface EmailContact {
    email: string;
}

interface SocialLinks {
    linkedin: string;
    github: string;
}

interface Bio {
    name: string;
    birthday: string;
    location: Location;
    contacts: {
        mobile: MobileContact;
        email: EmailContact;
    };
    social: SocialLinks;
}

export interface UserJson {
    bio: Bio;
}

export interface Section {
    name: string;
    icon: IconProp;
}

export interface Tag {
    tag: string;
    color: string;
    tagChildren: Tag[];
}
