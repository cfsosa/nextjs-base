import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { signOut } from 'next-auth/client';

export default NextAuth({
	debug: true,
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			profile: (data) => ({
				id: '',
				provider: 'google',
				...data,
			}),
		}),

		Providers.Credentials({
			name: 'Credentials',
			authorize: async (credentials: { email?: string; password?: string }) => {
				try {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API}/business/login`,
						{
							method: 'POST',
							body: JSON.stringify({
								email: credentials.email,
								password: credentials.password,
							}),
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					if (res) {
						const responseData = await res.json();
						if (responseData?.user?.email) {
							return responseData;
						}
					}
					return Promise.resolve(null);
				} catch (error) {
					console.log(error);
					return Promise.resolve(null);
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/signin',
	},
	callbacks: {
		session: async (session, token: any) => {
			if (token) {
				session.user = token.user;
				session.accessToken = token.token;
				// session.tokenExpired = token.accessTokenExpires;
			}
			return session;
		},
		jwt: async (token: any, response: any, account: any) => {
			if (response) {
				token = response;
			}
			if (account && response) {
				token = {
					// accessTokenExpires: response.expiresIn,
					...token,
				};
				return token;
			}
			// const actuallyDay = new Date(Date.now());
			// const expiredDay = new Date(token.accessTokenExpires);
			// if (actuallyDay < expiredDay) {

			return token;
			// }

			// return signOut();
		},
	},
});

