export type FetchActions<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error };

export interface State<T> {
	data?: T;
	error?: Error;
}

export type Filters = {
	completed: CompletedFilter;
	difficult: DifficultFilter;
};

export enum CompletedFilter {
	all = 'Todas',
	approved = 'Aprobadas',
	failed = 'Falladas'
}
export enum DifficultFilter {
	all = 'Todas',
	genin = 'Genin',
	chunin = 'Chunin',
	jonin = 'Jonin'
}
