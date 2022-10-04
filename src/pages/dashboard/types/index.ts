import { ResponsiveObject } from '@chakra-ui/react';

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

export const cardSize: ResponsiveObject<any> = {
	base: '130px',
	sm: '150px',
	xl: '170px'
};
