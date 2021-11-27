import * as React from 'react';
import clsx from 'clsx';
import { Icon } from 'components/icon';

export interface DataboxProps {
	color: 'success' | 'light';
	number?: string;
	text?: string;
	customIcon?: string;
}

/**
 * Use to notificate the user something happened
 */
export const Databox: React.FC<DataboxProps> = ({
	number,
	text,
	customIcon,
	color,
}) => {
	return (
		<div
			className={clsx(
				'flex p-6 rounded-xl',
				{ 'bg-primaryLight': color === 'light' },
				{ 'bg-alert-success': color === 'success' }
			)}
		>
			<Icon
				src={customIcon}
				fillpath
				className="my-auto ml-0 mr-auto text-primary text-2xl"
			/>
			<div 
				className={clsx('flex flex-col justify-center','text-right')} 
			>
			<p
				className="text-primary text-2xl font-bold"
			>
					{number}
			</p>
			<p
				className="text-gray-900 text-sm"
			>
					{text}
			</p>
			</div>
		</div>
	);
};
