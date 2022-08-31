import Swal from 'sweetalert2';

export default function handleErrorSweetAlert(message: string) {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: message,
		background: '#3b3b3b',
		color: '#fff'
	});
}
