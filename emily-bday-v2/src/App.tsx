import {
  ChakraProvider,
  Box,
  theme,
  Heading,
  keyframes,
  Text,
} from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import beach from "./beach_copy.jpeg";
import Section from "./Section";

const bounce = keyframes`
  0%, 100% {transform: translateY(0);}
  30% {transform: translateY(-30px)}
`;

export const App = (): JSX.Element => {
  const bounceAnim = `${bounce} 1s infinite linear`
  return (
    <ChakraProvider theme={theme}>
      <LoginModal />
      <Box
        textAlign="center"
        bgImage={`linear-gradient(to right, rgba(255,255,255, 0.3) 0 100%), url(${beach})`}
        backgroundSize="cover"
        aspectRatio={5 / 3}
        w="100vw"
      >
        <Heading
          fontSize="8xl"
          position="relative"
          top="32"
          textShadow={"2px 2px 4px gray"}
          display="flex"
          gap={8}
          justifyContent="center"
        >
          <Text animation={bounceAnim}>Happy</Text>
          <Text animation={bounceAnim} sx={{ "animation-delay": ".1s" }}>
            Birthday
          </Text>
          <Text animation={bounceAnim} sx={{ "animation-delay": ".2s" }}>
            Emily
          </Text>
        </Heading>
      </Box>
      <Section />
    </ChakraProvider>
  );
};
