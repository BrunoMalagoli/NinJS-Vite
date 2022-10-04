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

export interface CircleProgressBarProps {
	passed: number;
	errors: number;
	speedAnimation: number;
	title: 'Chunin' | 'Genin' | 'Jonin';
}
