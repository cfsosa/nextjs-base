import * as React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Typography } from 'components/common/typography';
import { Button } from 'components/common/button/button';
import { InputPassword } from 'components/common/form/input-password';
import { getSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { Logo } from 'components/logo';
import { GetServerSideProps } from 'next';
import { InputEmail } from 'components/common/form/input-email';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isValid, errors },
		watch,
	} = useForm({ mode: 'onChange' });

	const router = useRouter();
	const { addToast } = useToasts();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const handleSubmitData = (data: any) => {
		setIsLoading(true);

		signIn('credentials', {
			redirect: false,
			email: data.email,
			password: data.password,
			callbackUrl: '/dashboard',
		})
			.then((response) => {
				if (response?.error) {
					addToast(response.error, { appearance: 'error' });
				} else {
					router.push('/dashboard');
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const rules = {
		email: {
			required: { value: true, message: 'This is required' },
		},
		password: {
			required: { value: true, message: 'This is required' },
		},
		check: {},
	};

	return (
		<>
			<div className="w-full h-screen flex">
				<div className="w-full bg-white flex">
					<div className="rounded-l-2xl m-auto w-112 flex flex-col items-center justify-center">
						<Logo
							className="mb-4"
							type="withColor"
							classNameImg="max-w-[302px]"
						/>
						<Typography
							type="title"
							className="mb-9 text-2xl text-gray-900 font-bold mt-10"
						>
							Login
						</Typography>

						<form
							className="w-full"
							onSubmit={handleSubmit(handleSubmitData)}
						>
							<InputEmail
								name="email"
								title="name@example.com"
								isFill={!!watch('email')}
								register={register}
								rules={rules.email}
								error={errors.email}
								className="mb-3 md:mb-5"
								leftImg="user"
							/>
							<InputPassword
								name="password"
								title="Password"
								isFill={!!watch('password')}
								validate={false}
								register={register}
								rules={rules.password}
								error={errors.password}
								leftImg="lock"
							/>
							<Typography
								type="caption"
								className="mb-3 f-18 font-normal text-gray-500"
							>
								
								<Link href="/auth/forgot-password">
									<span className="cursor-pointer font-bold f-18">
										{' '}
										Forgot password?
									</span>
								</Link>
							</Typography>
							<div className="flex items-center justify-center mt-9 w-full">
								<Button
									label={isLoading ? 'Continue' : 'Continue'}
									fill
									loading={isLoading}
									boderRadius="rounded-md"
									size="full"
									type="submit"
									disabled={!isDirty || !isValid || !!isLoading}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);

	if (session && session.accessToken) {
		return {
			redirect: {
				destination: '/dashboard',
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
};

export default SignIn;
