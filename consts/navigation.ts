import { appRouter } from 'consts/router';

export const navigation = [
	{
		id: '1',
		label: 'home',
		subNavigation: [
			{
				name: 'dashboard',
				label: 'Dashboard',
				href: `${appRouter.dashboard.href}`,
				icon: 'home',
			},
			{
				name: 'companies',
				label: 'Companies',
				href: `${appRouter.companies.href}`,
				icon: 'briefcase',
			},
			{
				name: 'predefjobs',
				label: 'Pre-defined Jobs',
				href: `${appRouter.predefjobs.href}`,
				icon: 'folder',
			},
			{
				name: 'seekers',
				label: 'Job Seekers',
				href: `${appRouter.seekers.href}`,
				icon: 'toolbox',
			},
			{
				name: 'payments',
				label: 'Payments',
				href: `${appRouter.payments.href}`,
				icon: 'money-check',
			},
			{
				name: 'messages',
				label: 'Precanned Messages',
				href: `${appRouter.messages.href}`,
				icon: 'comment-alt',
			},
			{
				name: 'admin',
				label: 'Admin',
				href: `${appRouter.admin.href}`,
				icon: 'cogs',
			},
		],
	},
];

