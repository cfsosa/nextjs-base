import { LayoutDashboard } from 'components/layout';
import { useUser } from 'hooks/user';
import { useModal } from 'hooks/modal';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { Typography } from 'components/common/typography';
import { ListCompanies, CreateCompanies, DeleteCompanies } from 'components/companies';

import * as React from 'react';
import { Button } from 'components/common/button';

const Companies = () => {
	const user = useUser();

	const {
		Modal: ModalCreate,
		hide: hideCreate,
		show: showCreate,
		isShow: isShowCreate,
	} = useModal();

	const {
		Modal: ModalDelete,
		hide: hideDelete,
		show: showDelete,
		isShow: isShowDelete,
	} = useModal();

	return (
		<LayoutDashboard title="Companies">
			<div
				className="flex justify-between items-center mb-10"
			>
				<Typography
					type="title"
					className="text-2xl text-gray-900 font-bold"
				>
					Companies
				</Typography>
				<Button
					labelProps="f-24 font-normal"
					label={'+ Add'}
					fill
					boderRadius="rounded-md"
					size="small"
					type="submit"
					onClick={() => showCreate()}
				/>
			</div>

			<ListCompanies
				openDelete={() => showDelete()}
			/>
			<ModalCreate isShow={isShowCreate}>
				<CreateCompanies
					closeModal={() => hideCreate()}
				/>
			</ModalCreate>
			<ModalDelete isShow={isShowDelete}>
				<DeleteCompanies
					closeModal={() => hideDelete()}
				/>
			</ModalDelete>

		</LayoutDashboard>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (session && session.accessToken) {
		return {
			props: { session: session },
		};
	}
	return {
		redirect: {
			destination: '/',
			permanent: false,
		},
	};
};

export default Companies;
