import { useNavigate } from 'react-router-dom';
import toastLogout from '../pages/dashboard/utils/toastLogout';

function handleLogout() {
	console.log('hola');
	toastLogout();
	localStorage.removeItem('token');
	localStorage.removeItem('username');
	
}

export default handleLogout;
