import * as React from 'react';
import Link from 'next/link';
import { Images } from 'consts/images';
import clsx from 'clsx';

export const Logo: React.FC<{
	className?: string;
	type?: 'white' | 'withColor';
	classNameImg?: string;
}> = ({ className, type, classNameImg }) => {
	return (
		<Link href="/">
			<a className={clsx('cursor-pointer', className)}>
				<img
					className={clsx(classNameImg)}
					src={type === 'white' ? Images.logoWithColor : Images.logoWithColor}
				/>
			</a>
		</Link>
	);
};
