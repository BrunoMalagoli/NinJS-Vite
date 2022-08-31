import styles from './CircleProgressBar.module.css';
import { CircleProgressBarProps } from '../../types';
import { FC, useEffect, useState } from 'react';

const CircleProgressBar: FC<CircleProgressBarProps> = ({
	passed,
	errors,
	speedAnimation,
	title
}) => {
	if (passed + errors > 100) console.warn('La suma supera el 100%');

	const degPassed = 3.6 * passed;
	const degErrors = degPassed + 3.6 * errors;

	const [progressBarValue, setProgressBarValue] = useState(0);
	const [progressBarValueError, setProgressBarValueError] = useState(0);

	const mathGoal =
		passed > errors ? degErrors / degPassed : degPassed / degErrors;

	useEffect(() => {
		const intervalId = setInterval(() => {
			let newProgressBarValue;
			let newProgressBarValueError;
			if (passed > errors) {
				newProgressBarValue =
					progressBarValue < degPassed
						? progressBarValue + 1
						: progressBarValue;
				newProgressBarValueError =
					progressBarValueError < degErrors
						? progressBarValueError + mathGoal
						: progressBarValueError;
			} else {
				newProgressBarValue =
					progressBarValue < degPassed
						? progressBarValue + mathGoal
						: progressBarValue;
				newProgressBarValueError =
					progressBarValueError < degErrors
						? progressBarValueError + 1
						: progressBarValueError;
			}
			setProgressBarValue(newProgressBarValue);
			setProgressBarValueError(newProgressBarValueError);
		}, speedAnimation);

		return () => {
			clearInterval(intervalId);
		};
	}, [
		progressBarValue,
		progressBarValueError,
		speedAnimation,
		degPassed,
		degErrors,
		mathGoal,
		errors,
		passed
	]);

	// console.log({ progressBarValue, progressBarValueError })

	return passed + errors > 100 ? (
		<h1>La suma supera el 100%</h1>
	) : (
		<div className={styles.container}>
			<div
				className={styles.circularProgress}
				style={{
					background: `conic-gradient(
        green ${progressBarValue}deg,
        red ${progressBarValue}deg,
        red ${progressBarValueError}deg,
        #ededed 0deg
      )`
				}}
			>
				<span className={styles.progressValue}>
					<p>{Math.round(progressBarValue / 3.6)}%</p>
					<p>{Math.round((progressBarValueError - progressBarValue) / 3.6)}%</p>
				</span>
			</div>
			<span className={styles.text}>{title}</span>
		</div>
	);
};

export default CircleProgressBar;
