import * as React from 'react';
import { Button } from 'components/common/button';
import { useForm } from 'react-hook-form';
import { Input } from 'components/common/form/input';

type DeleteMessagesProps = {
	closeModal: any;
};

export const DeleteMessages: React.FC<DeleteMessagesProps> = ({
	closeModal,
}) => {

	return (
		<div className="flex flex-col max-w-lg w-full m-auto">
			<div className="flex bg-alert-error text-white py-8 w-full">

				<div className="flex flex-col text-center m-auto">
					<p className="text-sm mb-3">Delete Precanned Message</p>
					<p className="text-xs">Are you sure you want to delete this item?</p>
					<p className="text-xs italic">This action can’t be undone</p>

				</div>
			</div>
			<div className="p-8 grid grid-cols-2 gap-2.5">
				<Button
					labelProps=""
					label={'Cancel'}
					black
					boderRadius="rounded"
					size="large"
					type="submit"
					onClick={closeModal}
				/>
				<Button
					labelProps=""
					label={'Delete'}
					fill danger
					boderRadius="rounded"
					size="large"
					type="submit"
				/>
			</div>
		</div>

	);
};
