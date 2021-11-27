import { AxiosInstance } from 'axios';
import { UserType } from 'interfaces';
import axiosClient from '../AxiosClientConfig';

class usersService {
	constructor(private client: AxiosInstance) {}

	async getUser(): Promise<UserType> {
		return this.client.get('/business/verify-auth');
	}
}

export const UsersApiServices = new usersService(axiosClient);
