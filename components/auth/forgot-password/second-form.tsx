import * as React from 'react';
import { Button } from 'components/common/button';
import { InputPassword } from 'components/common/form/input-password';
import { useForm } from 'react-hook-form';
import { Icons } from 'consts/icons';

type FirstFormProps = {
	onHandleSubmit: (data: any) => void;
	isLoading: boolean;
};

export const SecondForm: React.FC<FirstFormProps> = ({
	onHandleSubmit,
	isLoading = false,
}) => {
	const {
		register,
		handleSubmit,

		watch,
		formState: { isDirty, isValid,errors, },
	} = useForm<{
		newPassword: string;
		confirmPassword: string;
	}>({ mode: 'onChange' });

	const rules = React.useMemo(() => {
		return {
			newPassword: {
				required: { value: true, message: 'This is required' },
				pattern: {
					value:
						/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$/&*])[A-Za-z\d@$!%*?&]{8,12}$/,
					message:
						'The password must have between 8 and 12 characters, an uppercase, a lowercase and a special character (#$/&*)',
				},
			},
			confirmPassword: {
				required: { value: true, message: 'This is required' },
				validate: (value: string) =>
					value === watch('newPassword') || `Passwords don't match`,
			},
		};
	}, []);
	const isDisabled = isLoading || !isDirty || !isValid;
	return (
		<form
			className="w-full"
			onSubmit={handleSubmit((data) => onHandleSubmit(data))}
		>
			<InputPassword
				name="newPassword"
				title="New password"
				isFill={!!watch('newPassword')}
				validate={false}
				register={register}
				rules={rules.newPassword}
				error={errors.newPassword}
				leftImg={Icons.passwordLock}
			/>
			<InputPassword
				name="confirmPassword"
				title="Confirm password"
				isFill={!!watch('confirmPassword')}
				validate={false}
				register={register}
				rules={rules.confirmPassword}
				error={errors.confirmPassword}
				leftImg={Icons.passwordLock}
			/>
			<div className="flex items-center justify-center mt-16 w-full">
				<Button
					labelProps="f-24 font-normal"
					label={isLoading ? 'Continue' : 'Continue'}
					fill
					loading={isLoading}
					boderRadius="rounded-md"
					size="full"
					type="submit"
					disabled={isDisabled}
				/>
			</div>
		</form>
	);
};
