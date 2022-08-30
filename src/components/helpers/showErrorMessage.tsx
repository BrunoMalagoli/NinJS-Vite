import { Text } from "@chakra-ui/react";

import { borderErrorAndShowMessageError } from "../users/Register/types";

function showErrorMessage({
  prop,
  errors,
  touched,
  focus,
}: borderErrorAndShowMessageError) {
  return (
    (errors[prop] && touched[prop] && (
      <Text
        fontWeight={400}
        color={focus[prop] ? "primaryYellow" : "red"}
        fontSize="xs"
      >
        {errors[prop]}
      </Text>
    )) ||
    ""
  );
}
export default showErrorMessage;
