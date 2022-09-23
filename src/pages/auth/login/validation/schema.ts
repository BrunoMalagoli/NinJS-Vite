import * as yup from 'yup';
export const userLoginSchema = yup.object({
	email: yup
		.string()
		.required('El email es requerido')
		.email('El email debe ser válido'),
	password: yup
		.string()
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.required('La contraseña es requerida')
		.matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])./, {
			message:
				'La contraseña debe tener al menos 1 número, 1 mayúscula y 1 minúscula'
		})
});
