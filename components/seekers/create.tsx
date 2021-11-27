import * as React from 'react';
import { Button } from 'components/common/button';
import { useForm } from 'react-hook-form';
import { InputText } from 'components/common/form/input-text';

type CreateSeekersProps = {
	//	isLoading: boolean;
	//	onHandleSubmit: (data: any) => void;
	closeModal: any;
};

export const CreateSeekers: React.FC<CreateSeekersProps> = ({
	//	onHandleSubmit,
	//	isLoading,
	closeModal,
}) => {

	const {
		register,
		handleSubmit,

		formState: { isDirty, isValid, errors },
		watch,
	} = useForm({ mode: 'onChange' });
	const rules = {
		firstname: {
			required: { value: true, message: 'This is required' },
		},
		lastname: {
			required: { value: true, message: 'This is required' },
		},
	};
	// const isDisabled = isLoading || !isDirty || !isValid;

	return (
		<div className="flex flex-col max-w-lg w-full m-auto">
			<div className="flex bg-primary text-white py-8 w-full">

				<div className="flex flex-col text-center m-auto">
					<p className="text-sm mb-3">Add a Job Seeker</p>
					<p className="text-xs">Nulla tincidunt mi ac nulla placerat consectetur.</p>
					<p className="text-xs italic">Etiam eu turpis interdum, suscipit urna id, placerat diam.</p>


				</div>
			</div>
			<div>
				<form
					className="w-full"
				>
					<InputText
						name="firstname"
						title="firstname"
						isFill={!!watch('firstname')}
						register={register}
						rules={rules.firstname}
						error={errors.firstname}
						className="mb-4"
					/>
					<InputText
						name="lastname"
						title="lastname"
						isFill={!!watch('lastname')}
						register={register}
						rules={rules.lastname}
						error={errors.lastname}
					/>
					<div className="p-8 grid grid-cols-2 gap-2.5">
						<Button
							labelProps=""
							label={'Cancel'}
							violet
							boderRadius="rounded"
							size="large"
							onClick={closeModal}
						/>
						<Button
							labelProps=""
							label={'Create'}
							fill violet
							boderRadius="rounded"
							size="large"
							type="submit"
						/>
					</div>
				</form>
			</div>



		</div>

	);
};
