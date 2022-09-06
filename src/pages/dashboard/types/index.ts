import Matrix from '../components/background/matrix/matrix';
import Clouds from '../components/background/clouds/Clouds';
import Leaves from '../components/background/leaves/Leaves';

export type QuizCardProps = {
	difficult: Difficult;
	questionID: string;
	number: number;
	completed?: boolean;
};

export type QuizCardListProps = {
	QuizCards: QuizCardProps[];
};

export enum Difficult {
	genin = 'Genin',
	chunin = 'Chunin',
	jonin = 'Jonin'
}

export const BackgroundSwitch = {
	[Difficult.genin]: Leaves,
	[Difficult.chunin]: Clouds,
	[Difficult.jonin]: Matrix
};

export interface CircleProgressBarProps {
	passed: number;
	errors: number;
	speedAnimation: number;
	title: 'Chunin' | 'Genin' | 'Jonin';
}
