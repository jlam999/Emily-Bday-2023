import {
  ChakraProvider,
  Box,
  theme,
  Image,
  Heading,
} from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import beach from "./beach_copy.jpeg";

export const App = () => (
  <ChakraProvider theme={theme}>
    <LoginModal />
    <Box textAlign="center">
      <Image src={beach} opacity={0.8} position="absolute" zIndex={-1}></Image>
      <Heading>Happy Birthday Emily!</Heading>
    </Box>
  </ChakraProvider>
);
