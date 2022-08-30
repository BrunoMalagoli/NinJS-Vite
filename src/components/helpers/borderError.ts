import { borderErrorAndShowMessageError } from "../users/Register/types";

function borderError({
  prop,
  errors,
  touched,
}: borderErrorAndShowMessageError) {
  return (errors[prop] && touched[prop] && "red") || "";
}

export default borderError;
