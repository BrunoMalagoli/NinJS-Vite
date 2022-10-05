import { toast } from 'react-toastify';
import toastStyles from '../styles/toast';

function createNextQuizUrl(
	currentUrl: string,
	totalGenin: number,
	totalChunin: number,
	totalJonin: number
) {
	let id = parseInt(currentUrl.match(/[0-9]{1,2}/g)![0]);

	let category = currentUrl.match(/[A-Z]/g)![0];

	if (category === 'G' && id === totalGenin) {
		category = 'C';
		id = 1;
		toast('Bienvenido a la categoria Chunin', {
			style: toastStyles
		});
		return `/quiz/${category}/${id}`;
	}
	if (category === 'C' && id === totalChunin) {
		category = 'J';
		id = 1;
		toast('Bienvenido a la categoria Jonin', {
			style: toastStyles
		});
		return `/quiz/${category}/${id}`;
	}
	if (category === 'J' && id === totalJonin) {
		toast('Has llegado al final del camino. Por ahora...', {
			style: toastStyles
		});
		return '/home';
	} else {
		id++;
	}

	let newUrl = `/quiz/${category}/${id}`;
	return newUrl;
}

export default createNextQuizUrl;
