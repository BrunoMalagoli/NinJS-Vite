import React from 'react';
import styles from './Clouds.module.css';
const Clouds = () => {
	return (
		<div>
			<div className={styles.x1}>
				<div className={styles.cloud}></div>
			</div>

			<div className={styles.x2}>
				<div className={styles.cloud}></div>
			</div>

			<div className={styles.x4}>
				<div className={styles.cloud}></div>
			</div>

			<div className={styles.x5}>
				<div className={styles.cloud}></div>
			</div>
		</div>
	);
};

export default Clouds;
