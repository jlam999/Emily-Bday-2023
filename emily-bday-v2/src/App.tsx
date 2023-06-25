import {
  ChakraProvider,
  theme,
  Heading,
  Text,
  chakra,
  VStack,
  SlideFade,
} from "@chakra-ui/react";
import LoginModal from "./components/LoginModal";
import Section from "./components/Section";
import anni from "./images/anni_pic.jpeg";
import { Hero } from "./components/Hero";

export const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <LoginModal />
      <Hero />
      <Section>
        <VStack p={4} spacing={4}>
          <Heading size="3xl">Hi Emily!</Heading>
          <Text textAlign="center" w="55%" fontSize="3xl">
            Happy 20th Birthday! I wanted to make a CS-related project for your
            birthday this year to make it extra special. This took me a long
            time to learn and make so I hope you enjoy it! I love you a lot!
          </Text>
          <Text fontSize="3xl">- Judson 😘</Text>
        </VStack>
      </Section>
      <Section>
        <chakra.img src={anni} h={"xl"} />
        <VStack p={4}>
          <Heading>Heading</Heading>
          <Text>Text goes here. I love you emily! </Text>
        </VStack>
      </Section>
    </ChakraProvider>
  );
};
