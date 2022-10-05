import { useEffect, useReducer, useRef } from 'react';
import { FetchActions, State } from '../types';

function useFetch<T>(url?: string, options?: RequestInit) {
	const cancelRequest = useRef<boolean>(false);

	const initialState: State<T> = {
		error: undefined,
		data: undefined
	};

	const fetchReducer = (
		state: State<T> = initialState,
		action: FetchActions<T>
	): State<T> => {
		switch (action.type) {
			case 'loading': {
				return initialState;
			}
			case 'fetched': {
				return {
					...state,
					data: action.payload
				};
			}
			case 'error': {
				return { ...state, error: action.payload };
			}
			default: {
				return state;
			}
		}
	};
	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		cancelRequest.current = false;
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: 'loading' });
			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					const error = new Error(response.status.toString());
					return dispatch({ type: 'error', payload: error as Error });
				}

				const data = await response.json();
				if (cancelRequest.current) return;

				dispatch({ type: 'fetched', payload: data.result });
			} catch (error) {
				if (cancelRequest.current) return;
				dispatch({ type: 'error', payload: error as Error });
			}
		};
		fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, [url]);

	return state;
}

export default useFetch;
