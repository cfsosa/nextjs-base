import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Typography } from '../../common/typography';
import { Icons } from 'consts/icons';
import clsx from 'clsx';
import { useUser } from 'hooks/user';
import { signOut } from 'next-auth/client';
import Link from 'next/dist/client/link';

export const DropdownProfile = () => {
	const user = useUser().user;
	return (
		<div className="text-right">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex items-center w-full px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none">
						<div className="flex flex-col cursor-pointer items-right">
							<Typography
								type="span"
								className={clsx(
									'ml-auto',
									'font-bold f-24 hidden md:flex'
								)}
							>
								{user?.name}
							</Typography>
							<Typography
								type="span"
								className={clsx(
									'ml-auto',
									'f-18 hidden md:flex'
								)}
							>
								Super Admin
							</Typography>
						</div>
						<div
							className={clsx(
								'flex'
							)}
						>
							<img src={Icons.down} alt="" className="flex m-auto" />
						</div>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute z-10 right-0 w-full md:mt-3 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg  focus:outline-none">
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<Link key="profile" href="/dashboard/profile">
										<a
											className={clsx(
												active
													? 'bg-active font-bold opacity-100 '
													: 'hover:bg-active font-light  opacity-70',
												'group flex items-center px-3 pt-7 hover:opacity-90 text-base rounded-md f-18'
											)}
										>
											<img
												src={Icons.profile}
												className="mr-4 flex-shrink-0 h-6 w-6"
												aria-hidden="true"
											/>
											Profile
										</a>
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={clsx(
											active
												? 'bg-active font-bold opacity-100 '
												: 'hover:bg-active font-light  opacity-70',
											'group flex items-center px-3 pt-7 hover:opacity-90 text-base rounded-md f-18'
										)}
										onClick={() => {
											signOut();
										}}
									>
										<img src={Icons.logout} alt="" className="mr-4" />
										Sign out
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};
