export type FetchActions<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error };

export interface State<T> {
	data?: T;
	error?: Error;
}
