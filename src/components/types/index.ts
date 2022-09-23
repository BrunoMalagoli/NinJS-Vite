type responseResult = {
	correct: boolean;
	explanation: string;
};

export type reviewResponse = {
	status: string;
	result: responseResult;
};
