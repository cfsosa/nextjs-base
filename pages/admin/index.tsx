import { LayoutDashboard } from 'components/layout';
import { useUser } from 'hooks/user';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { Typography } from 'components/common/typography';

import * as React from 'react';

const Admin = () => {
	const user = useUser();
	console.log(user);
	return (
		<LayoutDashboard title="Admin">
		<Typography
		type="title"
		className="mb-9 text-2xl text-gray-900 font-bold mt-10"
		>
		Admin
		</Typography>
		<div className="flex">

		</div>



		</LayoutDashboard>
		);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (session && session.accessToken) {
		return {
			props: {},
		};
	}
	return {
		redirect: {
			destination: '/',
			permanent: false,
		},
	};
};

export default Admin;
