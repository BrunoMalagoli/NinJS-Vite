import { toast } from 'react-toastify';
import toastStyles from '../../../../styles/toast';

export default function handleSuccessLogin() {
	toast.success(`Bienvenido ${localStorage.getItem('username')}`, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		style: toastStyles
	});
}
