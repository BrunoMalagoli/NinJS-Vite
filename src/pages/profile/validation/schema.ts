import * as yup from 'yup';

const profileSchema = yup.object({
	username: yup
		.string()
		.required('Campo requerido')
		.min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
		.max(20, 'El nombre de usuario puede tener hasta 20 caracteres')
});

export default profileSchema;
