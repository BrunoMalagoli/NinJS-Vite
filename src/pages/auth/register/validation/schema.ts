import * as yup from 'yup';
export const userRegisterSchema = yup.object({
	username: yup
		.string()
		.min(4, 'El nombre de usuario debe tener al menos 4 carácteres')
		.max(20, 'El nombre de usuario no puede superar los 20 caracteres')
		.required('El nombre de usuario es requerido'),
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
		.oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
		.required('Por favor repita la contraseña')
});
