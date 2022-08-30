import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai/";
import { BiUserCircle } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import borderError from "../../../helpers/borderError";
import showErrorMessage from "../../../helpers/showErrorMessage";
import useHandleBlurAndFocus from "../../../hooks/useHandleBlurAndFocus";

//import { onSubmit } from "../../api/onSubmit";
import { INITIAL_VALUES_FORM } from "../../../constant/initialValuesForm";
import { validationSchema } from "../utils/schemas/validationSchema";
import { handleShowHidePasswordTypes } from "../types";

const Form = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  });
  const { handleFocusUser, handleBlurUser, focus } = useHandleBlurAndFocus({
    username: false,
    email: false,
    password: false,
    repeatPassword: false,
  });
  function handleShowHidePassword(e: handleShowHidePasswordTypes) {
    setShowPassword({
      ...showPassword,
      [e]: !showPassword[e],
    });
  }
  function onSubmit() {}
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: INITIAL_VALUES_FORM,
      validationSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color={focus.username ? "primaryYellow" : "secondaryColor"}
          >
            <BiUserCircle />
          </InputLeftElement>

          <Input
            type="text"
            name="username"
            placeholder="User Name"
            value={values.username}
            focusBorderColor="primaryYellow"
            borderColor={borderError({ prop: "username", errors, touched })}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e);
              handleBlurUser(e);
            }}
            onFocus={handleFocusUser}
          />
        </InputGroup>
        {showErrorMessage({ prop: "username", errors, touched, focus })}

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color={focus.email ? "primaryYellow" : "secondaryColor"}
          >
            <MdAlternateEmail />
          </InputLeftElement>
          <Input
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e);
              handleBlurUser(e);
            }}
            onFocus={handleFocusUser}
            name="email"
            focusBorderColor="primaryYellow"
            borderColor={borderError({ prop: "email", errors, touched })}
            placeholder="Email"
          />
        </InputGroup>
        {showErrorMessage({ prop: "email", errors, touched, focus })}

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color={focus.password ? "primaryYellow" : "secondaryColor"}
          >
            <RiLockPasswordLine />
          </InputLeftElement>

          <Input
            value={values.password}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e);
              handleBlurUser(e);
            }}
            onFocus={handleFocusUser}
            name="password"
            type={showPassword.password ? "text" : "password"}
            focusBorderColor="primaryYellow"
            borderColor={borderError({ prop: "password", errors, touched })}
            placeholder="Password"
          />
          <InputRightElement>
            <Icon
              color="secondaryColor"
              as={showPassword.password ? AiFillEyeInvisible : AiFillEye}
              onClick={() => handleShowHidePassword("password")}
            />
          </InputRightElement>
        </InputGroup>
        {showErrorMessage({ prop: "password", errors, touched, focus })}

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color={focus.repeatPassword ? "primaryYellow" : "secondaryColor"}
          >
            <RiLockPasswordLine />
          </InputLeftElement>
          <Input
            type={showPassword.repeatPassword ? "text" : "password"}
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e);
              handleBlurUser(e);
            }}
            onFocus={handleFocusUser}
            name="repeatPassword"
            focusBorderColor="primaryYellow"
            borderColor={borderError({
              prop: "repeatPassword",
              errors,
              touched,
            })}
            placeholder="Repeat Password"
          />
          <InputRightElement>
            <Icon
              color="secondaryColor"
              as={showPassword.repeatPassword ? AiFillEyeInvisible : AiFillEye}
              onClick={() => handleShowHidePassword("repeatPassword")}
            />
          </InputRightElement>
        </InputGroup>
        {showErrorMessage({ prop: "repeatPassword", errors, touched, focus })}
      </Stack>

      <Button mt={5} w="100%" type="submit" bg="primaryYellow" color="black">
        Register
      </Button>
    </form>
  );
};

export default Form;
