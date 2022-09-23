import { SyntheticEvent, useState } from 'react';

const useHandleBlurAndFocus = (INITIAL_STATE_INPUTS: any) => {
	const [focus, setFocus] = useState(INITIAL_STATE_INPUTS);

	const handleFocusUser = (event: SyntheticEvent) => {
		const target = event.target as HTMLInputElement;
		setFocus({
			...focus,
			[target.name]: true
		});
	};

	const handleBlurUser = (event: SyntheticEvent) => {
		const target = event.target as HTMLInputElement;
		setFocus({
			...focus,
			[target.name]: false
		});
	};
	return { handleFocusUser, handleBlurUser, focus };
};

export default useHandleBlurAndFocus;
