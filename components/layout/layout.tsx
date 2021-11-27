import React, { useState } from 'react';
// import clsx from 'clsx';
import { MenuIcon } from '@heroicons/react/outline';
import { Notifications } from 'components/layout/notifications';
import { SidebarMobile } from 'components/layout/sidebars/mobile';
import { SidebarDesktop } from 'components/layout/sidebars/desktop';
import { DropdownProfile } from 'components/layout/profile/dropdownProfile';
// import { Icons } from 'consts/icons';
// import Styles from './styles.module.scss';

interface LayoutDashboardProps {
	title?: string;
	isLoading?: boolean;
}
export const LayoutDashboard: React.FC<LayoutDashboardProps> = ({
	children,
}) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [notifications, setNotifications] = useState(false);
	let refNotifications = React.useRef(null);
	let refSidebarMobile = React.useRef(null);

	return (
		<div className="h-screen flex overflow-hidden bg-gray-100">
			{/* inicio Sidebar mobile */}
			<SidebarMobile
				initialFocus={refSidebarMobile}
				setSidebarOpen={setSidebarOpen}
				sidebarOpen={sidebarOpen}
			/>
			{/* Fin Sidebar mobile */}

			{/*inicio Menu notifications */}
			<Notifications
				title="algo"
				initialFocus={refNotifications}
				setSidebarOpen={setNotifications}
				sidebarOpen={notifications}
			></Notifications>
			{/*fin Menu notifications */}

			<SidebarDesktop />

			<div className="flex flex-col w-0 flex-1 overflow-hidden">
				<div className="pl-1 py-1 sm:pl-3 sm:py-3 flex justify-between md:justify-end bg-white border-l-05 shadow-md">
					{/* Button mobile sidebar */}
					<button
						className="md:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-900 hover:text-active focus:outline-none"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<MenuIcon className="h-6 w-6" aria-hidden="true" />
					</button>
					{/* fin Button mobile sidebar */}

					{/* Nombre seccion */}

					{/* fin Nombre seccion */}

					{/* Notifications button */}
{/*					<button
						ref={refNotifications}
						className="flex justify-center items-center focus:outline-none group cursor-pointer pr-8"
						onClick={() => setNotifications(true)}
					>
						<div
							className={clsx('notification relative', 'active', Styles.active)}
						>
							<img src={Icons.exclamation} alt="" className="ml-3" />
						</div>
					</button>*/}

					{/* fin Notifications button */}

					{/* Dropdown profile */}
					<div className="flex">
						<DropdownProfile />
					</div>
					{/* fin Dropdown profile  */}
				</div>
				<main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
					<div className="py-10 px-10 md:px-24 2xl:px-44">
						<div className="mx-auto">{children}</div>
					</div>
				</main>
			</div>
		</div>
	);
};
