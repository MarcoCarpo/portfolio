import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Location {
    city: string;
    country: string;
}

interface MobileContact {
    number: string;
    prefix: string;
}

interface SocialLinks {
    linkedin: string;
    github: string;
    instagram: string;
    twitter: string;
    researchGate: string;
}

interface Bio {
    name: string;
    birthday: string;
    location: Location;
    contacts: {
        mobile: MobileContact;
        email: string;
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
