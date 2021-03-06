import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigation } from 'consts/navigation';
import { Images } from 'consts';

interface LayoutDashboardProps {
	isLoading?: boolean;
	sidebarOpen?: boolean;
	setSidebarOpen?: any;
	initialFocus?: any;
}
export const SidebarMobile: React.FC<LayoutDashboardProps> = ({
	sidebarOpen = false,
	setSidebarOpen = () => {},
	initialFocus = useRef(null),
}) => {
	return (
		<>
			{/* Sidebar mobile */}
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					static
					className="fixed inset-0 flex z-40 md:hidden bg-overlay"
					open={sidebarOpen}
					onClose={setSidebarOpen}
					initialFocus={initialFocus}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<div className="bg-primary relative flex-1 flex flex-col max-w-xs w-full">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										className="ml-1 flex items-center justify-center h-10 w-10 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<XIcon
											className="w-full p-1 text-white bg-secondary rounded-md"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Transition.Child>
							<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
								<div className="flex-shrink-0 flex items-center px-4">
									<Link href="/">
										<a
											className={clsx(
												'cursor-pointer flex items-center justify-center'
											)}
										>
											<img
												className="max-w-[244px]"
												src={Images.logoWithColor}
												alt=""
											/>
										</a>
									</Link>
								</div>
								<nav className="mt-5 flex-1 px-7">
									{navigation.map((item) => {
										const router = useRouter();
										return (
											<Fragment key={'nav-desktop-' + item.id}>
												<p className="text-white f-18 font-semibold px-3 pt-7">
													{item.label}
												</p>
												{item.subNavigation.map((subItem) => {
													const active = router.pathname === subItem.href;
													return (
														<Link key={subItem.name} href={subItem.href}>
															<a
																className={clsx(
																	active
																		? 'bg-active text-white font-bold opacity-100 '
																		: 'text-white hover:bg-active font-light  opacity-70',
																	'group flex items-center px-3 pt-7 hover:opacity-90 text-base rounded-md f-18'
																)}
															>
																<img
																	src={subItem.icon}
																	className="mr-4 flex-shrink-0 h-6 w-6 text-white"
																	aria-hidden="true"
																/>
																{subItem.label}
															</a>
														</Link>
													);
												})}
												<div className="divider mx-3 mt-7"></div>
											</Fragment>
										);
									})}
								</nav>
							</div>
						</div>
					</Transition.Child>
					<div className="flex-shrink-0 w-14" aria-hidden="true">
						{/* Force sidebar to shrink to fit close icon */}
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};
