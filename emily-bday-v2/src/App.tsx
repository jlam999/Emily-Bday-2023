import {
  ChakraProvider,
  theme,
  Heading,
  Text,
  chakra,
  VStack,
} from "@chakra-ui/react";
import LoginModal from "./components/LoginModal";
import Section from "./components/Section";
import anni from "./images/anni_pic.jpeg";
import { Hero } from "./components/Hero";
import aug from "./images/0august.jpeg";
import dec from "./images/0december.jpeg";
import feb from "./images/0feb.jpeg";
import jan from "./images/0jan.jpeg";
import july from "./images/0july.jpeg";
import june from "./images/0june.jpeg";
import mar from "./images/0march.jpeg";
import may from "./images/0may.jpeg";
import nov from "./images/0nov.jpeg";
import oct from "./images/0oct.jpeg";
import apr from "./images/0april.jpeg";
import sept from "./images/0sept.jpeg";

type SectionInfo = {
  image: string;
  month: string;
  text: string;
};

export const App = (): JSX.Element => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  \nisi ut aliquip ex ea commodo consequat.
`;
  const months: string[] = [
    jan,
    feb,
    mar,
    apr,
    may,
    june,
    july,
    aug,
    sept,
    oct,
    nov,
    dec,
  ];

  const sections: SectionInfo[] = [
    {
      image: july,
      month: "July",
      text: lorem,
    },
    {
      image: aug,
      month: "August",
      text: lorem,
    },
    {
      image: sept,
      month: "September",
      text: lorem,
    },
    {
      image: oct,
      month: "October",
      text: lorem,
    },
    {
      image: nov,
      month: "November",
      text: lorem,
    },
    {
      image: dec,
      month: "December",
      text: lorem,
    },
    {
      image: jan,
      month: "January",
      text: lorem,
    },
    {
      image: feb,
      month: "February",
      text: lorem,
    },
    {
      image: mar,
      month: "March",
      text: lorem,
    },
    {
      image: apr,
      month: "April",
      text: lorem,
    },
    {
      image: may,
      month: "May",
      text: lorem,
    },
    {
      image: june,
      month: "June",
      text: lorem,
    },
  ];

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
    </ChakraProvider>
  );
};
