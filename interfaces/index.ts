export type UserType = {
	data?:any;
	id: number;
	email: string;
	name: string;
};

export type UserRegisterRequest = {
	email: string;
	name: string;
};

export type UserDataResponse = {
	id: number;
	email: string;
	name: string;
};

export type VerifyValues = {
	email: string;
};

export interface AuthSession {
	token?: string;
	user?: UserType;
}

export type OptionType = {
	text: string;
	value: string;
	disabled: boolean;
	placeholder: boolean;
};

export type MessageType = {
	id: number,
	shortcut: string,
	message: string,
	access_type: {
		id: number,
		name: string
	},
};
