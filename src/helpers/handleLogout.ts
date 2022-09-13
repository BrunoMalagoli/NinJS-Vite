import toastLogout from '../pages/dashboard/utils/toastLogout';

function handleLogout() {
	toastLogout();
	localStorage.removeItem('token');
	localStorage.removeItem('username');
	localStorage.removeItem('variant');
}

export default handleLogout;
