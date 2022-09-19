type Answers = {
	A: string;
	B: string;
	C: string;
	D: string;
};
export type QuizResponse = {
	answers: Answers;
	difficult: string;
	code: string;
	question: string;
};

export interface QuizData {
	quizData: QuizResponse;
}
