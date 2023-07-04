import {
  ChakraProvider,
  Heading,
  Text,
  chakra,
  VStack,
  extendTheme,
  Button,
} from "@chakra-ui/react";
import LoginModal from "./components/LoginModal";
import Section from "./components/Section";
import { Hero } from "./components/Hero";
import Carousel from "./components/Carousel";
import { SectionInfo, sections } from "./SectionBlurbs";
import "@fontsource/hind-siliguri";
import "@fontsource/hind-madurai";

export const App = (): JSX.Element => {
  const theme = extendTheme({
    fonts: {
      body: `'Hind Siliguri', sans-serif`,
      heading: `'Hind Madurai', sans-serif`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <LoginModal />
      <Hero />
      <Section>
        <VStack p={4} spacing={4}>
          <Heading size="3xl">Hi Emily!</Heading>
          <Text textAlign="center" w="70%" fontSize="3xl">
            Happy 20th Birthday! I wanted to make a CS-related project for your
            birthday this year to make it extra special. This took me a long
            time to learn and make so I hope you enjoy it! I love you a lot!
          </Text>
          <Text fontSize="3xl">- Judson 😘</Text>
        </VStack>
      </Section>
      {sections.map((val: SectionInfo, idx: number) => {
        return (
          <Section>
            {idx % 2 === 0 ? <chakra.img src={val.image} h="xl" /> : null}
            <VStack p={4} w="50%">
              <Heading size="4xl" p={4}>
                {val.month}
              </Heading>
              <Text fontSize="2xl" p={4}>
                {val.text}
              </Text>
            </VStack>
            {idx % 2 === 1 ? <chakra.img src={val.image} h="xl" /> : null}
          </Section>
        );
      })}
      <Section>
        <VStack spacing={4}>
          <Heading size="2xl">
            Thank you for all of the wonderful memories!
          </Heading>
          <Text fontSize="2xl">
            I hope you have the best birthday ever! I love you so much!
          </Text>
        </VStack>
      </Section>
      <Carousel />
      <Section>
        <VStack spacing={4}>
          <Heading>Last but not least...</Heading>
          <Button
            as="a"
            href="https://www.youtube.com/watch?v=tdZhN7iV4yE&ab_channel=JudsonLam"
            variant="link"
            colorScheme="pink"
            size="lg"
          >
            Click here!
          </Button>
        </VStack>
      </Section>
    </ChakraProvider>
  );
};
