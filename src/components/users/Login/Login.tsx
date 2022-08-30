import { Stack, Text, Flex } from "@chakra-ui/react";

//components
import Form from "./components/Form";

export const Login = () => {
  return (
    <Flex bg="primaryBG" h="100vh" justify="center" align="center" w="100%">
      <Stack width="100%" p={8} maxWidth={"md"}>
        <Text fontSize="2xl" fontWeight={700} mb="6" color="white">
          Login
        </Text>
        <Form />
      </Stack>
    </Flex>
  );
};
