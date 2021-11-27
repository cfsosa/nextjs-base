import clsx from 'clsx';
import { Icon } from 'components/icon';
import Link from 'next/link';
import * as React from 'react';
import { Typography } from '../typography';
import { Spinner } from '../spinner/spinner';

export interface ButtonProps {
	size?: 'extra-small' | 'small' | 'medium' | 'large' | 'full';
	label?: string;
	disabled?: boolean;
	onClick?: () => void;
	href?: string;
	fill?: boolean;
	loading?: boolean;
	violet?: boolean;
	danger?: boolean;
	black?: boolean;
	social?: 'facebook' | 'google';
	icon?: any;
	className?: string;
	boderRadius?: string;
	withBorder?: boolean;
	labelProps?: string;
	sizesButton?: string;
}

/**
 * secondary UI component for user interaction
 */
export const Button: React.FC<
	ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
	size,
	label,
	disabled,
	loading,
	onClick,
	violet,
	danger,
	black,
	fill,
	social,
	icon,
	withBorder = true,
	className,
	boderRadius,
	labelProps,
	children,
	sizesButton = false,
	href = null,
	...props
}) => {
		const refButtom = React.useRef(null);
		return (
			<>
				{href ? (
					<Link href={href}>
						<button
							ref={refButtom}
							type="button"
							disabled={disabled}
							onClick={onClick}
							className={clsx(
								className,
								//border radius
								boderRadius,
								// with border
								{ 'border-none ': !withBorder },
								//size
								{ 'text-2xl py-5 w-full': size === 'full' },
								{ 'text-sm py-3.5 w-full': size === 'large' },
								{ 'w-61': size === 'medium' },
								{ 'text-lg py-3 px-8 leading-4': size === 'small' },
								{ '': size === 'extra-small' },
								//fill
								{
									'text-white bg-secondary border-secondary':
										fill && !social && !violet && !danger,
								},
								{
									'hover:text-secondary hover:border-secondary hover:bg-transparent':
										fill && !social && !disabled && !danger,
								},
								{
									'text-white bg-primary border-primary':
										fill && !social && violet,
								},
								/*Danger styles fill*/
								{
									'text-white bg-alert-error border-alert-error':
										fill && !social && !violet && danger,
								},
								/*Danger styles fill*/
								{
									'hover:bg-transparent hover:text-alert-error hover:border-alert-error ':
										fill && !social && !disabled && !violet && danger,
								},
								/*Danger styles no fill*/
								{
									'text-alert-error bg-transparent border-alert-error':
										!fill && !social && !violet && danger,
								},
								/*Danger styles no fill*/
								{
									'hover:bg-alert-error hover:text-white ':
										!fill && !social && !disabled && !violet && danger,
								},
								{
									'hover:text-primary hover:border-primary hover:bg-transparent':
										fill && !social && !disabled && violet,
								},
								//not fill
								{ 'text-secondary border-secondary': !fill && !social && !violet },
								{
									'text-primary border-primary hover:bg-primary hover:text-white':
										!fill && !social && violet && !danger,
								},
								{
									'hover:bg-secondary hover:text-white ':
										!fill && !social && !disabled && !violet && !danger,
								},
								//not fill black (gray-900)
								{ 'text-gray-900 border-gray-900': !fill && !social && !violet && black },
								{
									'hover:bg-gray-900 hover:text-white ':
										!fill && !social && !disabled && !violet && !danger && black,
								},
								//disabled
								{
									'disabled:bg-secondary disabled:text-white disabled:opacity-50':
										!social,
								},
								//facebook
								{ 'text-facebook border-facebook': social === 'facebook' },
								{
									'hover:text-white hover:bg-facebook':
										social === 'facebook' && !disabled,
								},
								//google
								{ 'text-gray-500 border-gray-500': social === 'google' },
								{
									'hover:text-white hover:bg-gray-500':
										social === 'google' && !disabled,
								},
								//disable social
								{
									'disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-900 disabled:opacity-50':
										social,
								},
								//global
								'group flex items-center justify-center border outline-none transition-colors duration-300',
								{
									'group flex items-center justify-center border outline-none transition-colors duration-300':
										!sizesButton,
								},
								sizesButton,
								'focus:outline-none',

								'disabled:cursor-not-allowed'
							)}
							{...props}
						>
							{label ? (
								<div className="flex items-center">
									{icon && (
										<div className="mr-4 w-4 h-4">
											<Icon
												src={icon}
												fillPath={social === 'facebook'}
												className={clsx(
													{
														'text-facebook ': social === 'facebook',
													},
													{
														'group-hover:text-white':
															social === 'facebook' && !disabled,
													}
												)}
											/>
										</div>
									)}{' '}
									{loading && <Spinner type="loadingButton" />}
									<span className={labelProps}>{label}</span>
								</div>
							) : (
								children
							)}
						</button>
					</Link>
				) : (
					<button
						ref={refButtom}
						type="button"
						disabled={disabled}
						onClick={onClick}
						className={clsx(
							className,
							//border radius
							boderRadius,
							// with border
							{ 'border-none ': !withBorder },
							//size
							{ 'text-2xl py-5 w-full': size === 'full' },
							{ 'text-sm py-3.5 w-full': size === 'large' },
							{ 'w-61': size === 'medium' },
							{ 'text-lg py-3 px-8 leading-4': size === 'small' },
							{ 'text-sm py-3.5 w-full': size === 'extra-small' },
							//fill
							{
								'text-white bg-secondary border-secondary':
									fill && !social && !violet && !danger,
							},
							{
								'hover:text-secondary hover:border-secondary hover:bg-transparent':
									fill && !social && !disabled && !danger,
							},
							{
								'text-white bg-primary border-primary':
									fill && !social && violet,
							},
							/*Danger styles fill*/
							{
								'text-white bg-alert-error border-alert-error':
									fill && !social && !violet && danger,
							},
							/*Danger styles fill*/
							{
								'hover:bg-transparent hover:text-alert-error hover:border-alert-error ':
									fill && !social && !disabled && !violet && danger,
							},
							/*Danger styles no fill*/
							{
								'text-alert-error bg-transparent border-alert-error':
									!fill && !social && !violet && danger,
							},
							/*Danger styles no fill*/
							{
								'hover:bg-alert-error hover:text-white ':
									!fill && !social && !disabled && !violet && danger,
							},
							{
								'hover:text-primary hover:border-primary hover:bg-transparent':
									fill && !social && !disabled && violet,
							},
							//not fill
							{ 'text-secondary border-secondary': !fill && !social && !violet },
							{
								'text-primary border-primary hover:bg-primary hover:text-white':
									!fill && !social && violet && !danger,
							},
							{
								'hover:bg-secondary hover:text-white ':
									!fill && !social && !disabled && !violet && !danger,
							},
							//not fill black (gray-900)
							{ 'text-gray-900 border-gray-900': !fill && !social && !violet && black },
							{
								'hover:bg-gray-900 hover:text-white ':
									!fill && !social && !disabled && !violet && !danger && black,
							},
							//disabled
							{
								'disabled:bg-secondary disabled:text-white disabled:opacity-50':
									!social,
							},
							//facebook
							{ 'text-facebook border-facebook': social === 'facebook' },
							{
								'hover:text-white hover:bg-facebook':
									social === 'facebook' && !disabled,
							},
							//google
							{ 'text-gray-500 border-gray-500': social === 'google' },
							{
								'hover:text-white hover:bg-gray-500':
									social === 'google' && !disabled,
							},
							//disable social
							{
								'disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-900 disabled:opacity-50':
									social,
							},
							//global
							'group flex items-center justify-center border outline-none transition-colors duration-300',
							{
								'group flex items-center justify-center border outline-none transition-colors duration-300':
									!sizesButton,
							},
							sizesButton,
							'focus:outline-none',

							'disabled:cursor-not-allowed'
						)}
						{...props}
					>
						{label ? (
							<div className="flex items-center">
								{icon && (
									<div className="mr-4 w-4 h-4">
										<Icon
											src={icon}
											fillPath={social === 'facebook'}
											className={clsx(
												{
													'text-facebook ': social === 'facebook',
												},
												{
													'group-hover:text-white':
														social === 'facebook' && !disabled,
												}
											)}
										/>
									</div>
								)}{' '}
								{loading && <Spinner type="loadingButton" />}
								<span className={labelProps}>{label}</span>
							</div>
						) : (
							children
						)}
					</button>
				)}
			</>
		);
	};

export const ButtonContent: React.FC<
	ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
	size = 'large',
	label,
	disabled,
	onClick,
	href,
	fill = false,
	social,
	icon,
	children,
	...props
}) => {
		return (
			<>
				{href ? (
					<Button
						size={size}
						label={label}
						disabled={disabled}
						href={href}
						fill={fill}
						social={social}
						icon={icon}
						{...props}
					/>
				) : (
					<Button
						size={size}
						label={label}
						disabled={disabled}
						onClick={onClick}
						href={href}
						fill={fill}
						social={social}
						icon={icon}
						{...props}
					>
						{children}
					</Button>
				)}
			</>
		);
	};
