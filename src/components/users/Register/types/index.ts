import { FormikErrors, FormikTouched } from "formik";

export interface valuesRegisterForm {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export type tipoProp = "username" | "email" | "password" | "repeatPassword";
export type handleShowHidePasswordTypes = "password" | "repeatPassword";
export interface borderErrorAndShowMessageError {
  prop: tipoProp;
  errors: FormikErrors<valuesRegisterForm>;
  touched: FormikTouched<valuesRegisterForm>;
  focus?: any;
}
