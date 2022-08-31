import { borderErrorAndShowMessageError } from '../pages/auth/types';

function borderError({
	prop,
	errors,
	touched
}: borderErrorAndShowMessageError) {
	return (errors[prop] && touched[prop] && 'red') || '';
}

export default borderError;
