import { useSession } from 'next-auth/client';
import { UserType } from 'interfaces';
import { GET_USER } from 'api';
import { useQuery } from 'react-query';
import { UsersApiServices } from 'api';

export const useUser = () => {
	const [session] = useSession();
	const token = session?.accessToken ? (session?.accessToken as string) : '';
	
	const {
		data: userData,
		refetch,
		isLoading,
	} = useQuery<UserType | undefined>(GET_USER, () =>
		UsersApiServices.getUser()
	);
	const isAuth = session?.accessToken ? true : false;

	return {
		user: userData,
		isLoading,
		token,
		refetch,
		isAuth,
	};
};