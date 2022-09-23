import { FC, useEffect, useState } from 'react';
import { ShurikenProps } from './types';
import './shuriken.styles.css';

/**
 * @description Set size to 100 if you want it to rotate and not break the page
 * @param rotate Sets if it will rotate or not
 * @param size Sets the width and height of the image
 * @returns
 */
const Shuriken: FC<ShurikenProps> = ({ rotate, size }) => {
	return (
		<div className={rotate != 'none' ? 'shuriken-' + rotate : ''}>
			<img
				width={size}
				height={size}
				src='/shuriken.png'
				alt='Shuriken NinJs'
			/>
		</div>
	);
};

export default Shuriken;
