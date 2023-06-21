import { ChakraProvider, Box, theme, Heading } from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import beach from "./beach_copy.jpeg";

export const App = () => (
  <ChakraProvider theme={theme}>
    <LoginModal />
    <Box
      textAlign="center"
      backgroundImage={`url(${beach})`}
      backgroundSize="cover"
      aspectRatio={5 / 3}
      w="100vw"
      filter="opacity(75%)"
    >
      <Heading
        fontSize="8xl"
        position="relative"
        top="32"
        textShadow={"2px 2px 4px gray"}
      >
        Happy Birthday Emily!
      </Heading>
    </Box>
  </ChakraProvider>
);
