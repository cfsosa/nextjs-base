export type UpdatePasswordRequest = {
	password: string;
	newPassword: string;
};

export class ProfileResponse {
	id: number;
	email: string;
	name: string;

	static mapValuesTo(data: any) {
		const obj = new ProfileResponse();

		obj.id = data.id;
		obj.email = data.email;
		obj.name = data.name;

		return { ...obj };
	}
}
