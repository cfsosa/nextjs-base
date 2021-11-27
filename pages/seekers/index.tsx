import { LayoutDashboard } from 'components/layout';
import { useUser } from 'hooks/user';
import { useModal } from 'hooks/modal';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { Typography } from 'components/common/typography';
import { ListSeekers, CreateSeekers, EditSeekers, DeleteSeekers } from 'components/seekers';

import * as React from 'react';
import { Button } from 'components/common/button';

const Seekers = () => {
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
		<LayoutDashboard title="Seekers">
			<div
				className="flex justify-between items-center mb-10"
			>
				<Typography
					type="title"
					className="text-2xl text-gray-900 font-bold"
				>
					Job Seekers
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

			<ListSeekers
				openDelete={() => showDelete()}
				openEdit={() => showEdit()}
			/>

			<ModalCreate isShow={isShowCreate}>
				<CreateSeekers
					closeModal={() => hideCreate()}
				/>
			</ModalCreate>

			<ModalEdit isShow={isShowEdit}>
				<EditSeekers
					closeModal={() => hideEdit()}
				/>
			</ModalEdit>

			<ModalDelete isShow={isShowDelete}>
				<DeleteSeekers
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

export default Seekers;
