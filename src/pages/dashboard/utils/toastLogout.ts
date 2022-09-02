import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function toastLogout() {
	toast.success(
		`Deslogueado satisfactoriamente ${localStorage.getItem('username')}`,
		{
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined
		}
	);
}
