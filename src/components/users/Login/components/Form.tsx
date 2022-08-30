import { useState } from "react";

import { useFormik } from "formik";

import {
  Stack,
  FormControl,
  Input,
  Button,
  Link,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";

//icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai/";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

//hooks
import useHandleBlurAndFocus from "../../../hooks/useHandleBlurAndFocus";

//helpers
import borderError from "../../../helpers/borderError";
import showErrorMessage from "../../../helpers/showErrorMessage";

//import { onSubmit } from "../../api/onSubmit";
import { INITIAL_VALUES_FORM } from "../../../constant/initialValuesForm";
import { validationSchema } from "../../../users/Register/utils/schemas/validationSchema"; //Agregar uno para Login

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowHidePassword = () => setShowPassword(!showPassword);

  const { handleFocusUser, handleBlurUser, focus } = useHandleBlurAndFocus({
    email: false,
    password: false,
  });
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
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color={focus.email ? "primaryYellow" : "secondaryColor"}
            >
              <MdAlternateEmail />
            </InputLeftElement>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              color="white"
              focusBorderColor="primaryYellow"
              borderColor={borderError({ prop: "email", errors, touched })}
              autoComplete="off"
              onChange={handleChange}
              onBlur={(e) => {
                handleBlur(e);
                handleBlurUser(e);
              }}
              onFocus={handleFocusUser}
            />
          </InputGroup>
          {showErrorMessage({ prop: "email", errors, touched, focus })}
        </FormControl>

        <FormControl id="password">
          <InputGroup>
            <InputLeftElement
              color={focus.password ? "primaryYellow" : "secondaryColor"}
              pointerEvents="none"
            >
              <RiLockPasswordLine />
            </InputLeftElement>

            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={values.password}
              color="white"
              focusBorderColor="primaryYellow"
              borderColor={borderError({
                prop: "password",
                errors,
                touched,
              })}
              onChange={handleChange}
              onBlur={(e) => {
                handleBlur(e);
                handleBlurUser(e);
              }}
              onFocus={handleFocusUser}
            />
            <InputRightElement>
              <Icon
                color="secondaryColor"
                as={showPassword ? AiFillEyeInvisible : AiFillEye}
                onClick={handleShowHidePassword}
              />
            </InputRightElement>
          </InputGroup>
          {showErrorMessage({ prop: "password", errors, touched, focus })}
        </FormControl>

        <Link fontSize="14" textAlign={"right"} color="secondaryColor">
          Forgot Password?
        </Link>

        <Button mt={5} w="100%" type="submit" bg="primaryYellow">
          Login
        </Button>

        <Text color="white" fontSize="14" textAlign={"center"}>
          Don{`'`}t have a account yet? {/* do not delete the empty space*/}
          <Link href={"/register"} fontWeight={700} color="primaryYellow">
            Sign Up
          </Link>
        </Text>
      </Stack>
    </form>
  );
};

export default Form;
