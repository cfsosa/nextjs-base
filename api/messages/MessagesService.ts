import { AxiosInstance } from 'axios';
import { MessageType } from 'interfaces';
import axiosClient from '../AxiosClientConfig';
import { getSession, signIn } from 'next-auth/client';

class messagesService {
	constructor(private client: AxiosInstance) {}
		async getAllMessages(): Promise<MessageType[]> {
		return this.client.get('/business/canned-messages');
	}

}

export const MessagesApiServices = new messagesService(axiosClient);
