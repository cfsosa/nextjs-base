import clsx from 'clsx';
import * as React from 'react';
import SVG from 'react-inlinesvg';
import styles from './icon.module.scss';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


interface IconProps {
	src: string;
	width?: string;
	height?: string;
	className?: string;
	pointer?: boolean;
	fillPath?: boolean;
	fillLine?: boolean;
	fillCircle?: boolean;
	fillRect?: boolean;
}

export const Icon: React.FC<IconProps> = ({
	src,
	className,
	pointer = false,
	fillPath = false,
	fillLine = false,
	fillRect = false,
	fillCircle = false,
}) => {
	return (
    <>
    	<FontAwesomeIcon icon={src}
    	className={clsx(
			'max-w-full max-h-full',
			className,
			{ 'cursor-pointer': pointer },
			[fillPath && styles.svgFillPath],
			[fillCircle && styles.svgFillCircle],
			[fillLine && styles.svgFillLine],
			[fillRect && styles.svgFillRectfillRect]
		)}/>
    </>
	);
};
