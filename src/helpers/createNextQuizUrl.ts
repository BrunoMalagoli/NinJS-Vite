import { toast } from 'react-toastify';
import toastStyles from '../styles/toast';

function createNextQuizUrl(currentUrl: string) {
	let id = parseInt(currentUrl.match(/[0-9]{1,2}/g)![0]);

	let category = currentUrl.match(/[A-Z]/g)![0];

	if (id === 16) {
		switch (category) {
			case 'G':
				category = 'C';
				id = 1;
				toast('Bienvenido a la categoria Chunin', {
					style: toastStyles
				});
				return `/quiz/${category}/${id}`;
			case 'C':
				category = 'J';
				id = 1;
				toast('Bienvenido a la categoria Jonin', {
					style: toastStyles
				});
				return `/quiz/${category}/${id}`;
			case 'J':
				toast('Has llegado al final del camino. Por ahora...', {
					style: toastStyles
				});
				return '/home';
			default:
				toast('Parece que trataste de ir a tierras desconocidas...', {
					style: toastStyles
				});
				return '/home';
		}
	} else {
		id++;
	}
	let newUrl = `/quiz/${category}/${id}`;
	return newUrl;
}

export default createNextQuizUrl;
