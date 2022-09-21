import { CompletedFilter, DifficultFilter, Filters } from '../types';

const urlBuilder = (filters: Filters) => {
	let difficult = '';
	let completed = '';

	switch (filters.completed) {
		case CompletedFilter.all: {
			completed = '';
			break;
		}
		case CompletedFilter.approved: {
			completed = '&completed=true&all=true';
			break;
		}
		case CompletedFilter.failed: {
			completed = '&completed=false&all=true';
			break;
		}
		default: {
			completed = '';
		}
	}

	switch (filters.difficult) {
		case DifficultFilter.all: {
			difficult = '';
			break;
		}
		case DifficultFilter.chunin: {
			difficult = '&difficult=Chunin';
			break;
		}
		case DifficultFilter.genin: {
			difficult = '&difficult=Genin';
			break;
		}
		case DifficultFilter.jonin: {
			difficult = '&difficult=Jonin';
			break;
		}
		default: {
			difficult = '';
		}
	}
	return [completed, difficult];
};

export default urlBuilder;
