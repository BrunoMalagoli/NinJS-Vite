import { toast } from 'react-toastify';

const toastMaxPage = () => {
	toast.error(`Maximo de páginas`, {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined
	});
};

export default toastMaxPage;
