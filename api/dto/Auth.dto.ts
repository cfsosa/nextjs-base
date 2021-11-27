import { UserType } from 'interfaces';

export class VerifyValuesRequest {
	email: string;

	static mapValuesTo(data: any) {
		const obj = new VerifyValuesRequest();
		obj.email = data.email;
		return obj;
	}
}

export type VerifyValues = {
	valid: boolean;
	messages: string[];
};

export class VerifyValuesResponse {
	email: VerifyValues;

	static mapValuesTo(data: any) {
		const obj = new VerifyValuesResponse();
		obj.email = data.email;
		return obj;
	}
}

export class UserRegisterRequest {
	email: string;
	password: string;

	static mapValuesTo(data: any) {
		const obj = new UserRegisterRequest();
		obj.email = data.email;
		obj.password = data.password;
		return obj;
	}
}

export interface AuthSession {
	token: string;
	user: UserType;
}

export interface LoginRequest {
	username: string;
	password: string;
}
