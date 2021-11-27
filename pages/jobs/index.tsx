import { LayoutDashboard } from 'components/layout';
import { useUser } from 'hooks/user';
import { useModal } from 'hooks/modal';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { Typography } from 'components/common/typography';
import { ListJobs, CreateJobs, EditJobs, DeleteJobs } from 'components/jobs';

import * as React from 'react';
import { Button } from 'components/common/button';

const Jobs = () => {
	const user = useUser();

	const {
		Modal: ModalCreate,
		hide: hideCreate,
		show: showCreate,
		isShow: isShowCreate,
	} = useModal();

	const {
		Modal: ModalEdit,
		hide: hideEdit,
		show: showEdit,
		isShow: isShowEdit,
	} = useModal();

	const {
		Modal: ModalDelete,
		hide: hideDelete,
		show: showDelete,
		isShow: isShowDelete,
	} = useModal();

	return (
		<LayoutDashboard title="Predefined Jobs">
			<div
				className="flex justify-between items-center mb-10"
			>
				<Typography
					type="title"
					className="text-2xl text-gray-900 font-bold"
				>
					Predefined Jobs
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

			<ListJobs
				openDelete={() => showDelete()}
				openEdit={() => showEdit()}
			/>

			<ModalCreate isShow={isShowCreate}>
				<CreateJobs
					closeModal={() => hideCreate()}
				/>
			</ModalCreate>

			<ModalEdit isShow={isShowEdit}>
				<EditJobs
					closeModal={() => hideEdit()}
				/>
			</ModalEdit>

			<ModalDelete isShow={isShowDelete}>
				<DeleteJobs
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

export default Jobs;
