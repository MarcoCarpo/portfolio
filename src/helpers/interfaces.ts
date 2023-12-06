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
