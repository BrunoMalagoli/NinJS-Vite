import * as Yup from "yup";

const required = "* Este campo es obligatorio";
export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "* La cantidad mínima de caracteres es 4")
    .required(required),
  email: Yup.string().email("* Debe ser un email válido").required(required),
  password: Yup.string().required(required),
  repeatPassword: Yup.mixed()
    .oneOf([Yup.ref("password"), null], "* La contraseña debe coincidir")
    .required(required),
});
