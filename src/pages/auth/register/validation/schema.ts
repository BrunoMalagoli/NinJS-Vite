import * as yup from 'yup';
export const userRegisterSchema = yup.object({
	username: yup
		.string()
		.required('El nombre de usuario es requerido')
		.min(4, 'El nombre de usuario debe tener al menos 4 carácteres'),
	email: yup
		.string()
		.required('El email es requerido')
		.email('El email debe ser válido'),
	password: yup
		.string()
		.min(8, 'La contraseña debe tener al menos 8 carácteres')
		.required('La contraseña es requerida')
		.matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])./, {
			message:
				'La contraseña debe tener al menos 1 número, 1 mayúscula y 1 minúscula'
		}),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
});
