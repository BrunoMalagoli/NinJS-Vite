import { FC } from 'react';
import styles from './shuriken.module.css';
import { ShurikenProps } from './types';

/**
 * @description Set size to 100 if you want it to rotate and not break the page
 * @param rotate Sets if it will rotate or not
 * @param size Sets the width and height of the image
 * @returns
 */
const Shuriken: FC<ShurikenProps> = ({ rotate, size }) => {
	return (
		<div className={rotate ? styles.shuriken : ''}>
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
