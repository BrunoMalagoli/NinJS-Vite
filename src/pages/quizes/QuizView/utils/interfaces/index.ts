type answers = {
	A: string;
	B: string;
	C: string;
	D: string;
};
export type quizResponse = {
	answers: answers;
	difficult: string;
	img: string;
};

export interface qData {
	quizData: quizResponse;
}
