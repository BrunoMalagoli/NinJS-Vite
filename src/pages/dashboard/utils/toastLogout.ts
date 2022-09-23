import { toast } from 'react-toastify';
import toastStyles from '../../../styles/toast';

export default function toastLogout() {
	toast.success(
		`Hasta pronto! ${localStorage.getItem('username') || 'unknown'}`,
		{
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			style: toastStyles
		}
	);
}
