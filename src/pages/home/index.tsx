import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import styles from "./index.module.css";
export const Hero = () => {
  return (
    <Container
      minWidth={"100%"}
      bg={"black"}
      bgImage={"url('/bamboo2.png')"}
      bgPos={"center"}
      bgSize={"fill"}
      className={styles.heroContainer}
    >
      <Flex
        minHeight={"75vh"}
        justify={"center"}
        alignItems="center"
        flexDir={"column"}
        gap={8}
      >
        <Heading display={"inline-flex"} color={"yellow"} as="h1" size="4xl">
          Nin<Text color={"white"}>JS</Text>
        </Heading>
        <Button bgColor={"yellow"} variant={"outline"}>
          Empezar
        </Button>
      </Flex>
    </Container>
  );
};
