import { Box, Heading, keyframes, Text, Icon, HStack } from "@chakra-ui/react";
import { FaChevronCircleDown as DownArrow } from "react-icons/fa";
import beach from "../images/beach_copy.jpeg";

const bounce = keyframes`
  0%, 100% {transform: translateY(0);}
  30% {transform: translateY(-30px)}
`;

const wiggle = keyframes`
  0%, 12%, 100% {transform: rotate(0deg)}
  2%, 10% {transform: rotate(10deg)}
  6% {transform: rotate(-10deg)}
`;

export const Hero = (): JSX.Element => {
  const bounceAnim = `${bounce} 1s infinite linear`;
  const wiggleAnim = `${wiggle} 3s infinite linear`;
  return (
    <Box
      textAlign="center"
      bgImage={`linear-gradient(to right, rgba(255,255,255, 0.3) 0 100%), url(${beach})`}
      backgroundSize="cover"
      aspectRatio={5 / 3}
      w="100vw"
      display="flex"
      flexDir="column"
      alignItems="center"
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
          Emily!
        </Text>
      </Heading>
      <HStack
        position="relative"
        top="65%"
        p={2}
        borderColor={"blackAlpha.100"}
        borderWidth={1}
        borderRadius={"20px"}
        animation={wiggleAnim}
      >
        <Text fontSize={"xl"}>Scroll Down</Text>
        <Icon as={DownArrow} />
      </HStack>
    </Box>
  );
};
