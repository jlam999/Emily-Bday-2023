import { Box, Flex, SlideFade} from "@chakra-ui/react"
import { ReactNode, useRef } from "react";
import { useInViewport } from "react-in-viewport";

const Section = ({children} : {children: ReactNode}):JSX.Element => {
    const myRef = useRef(null);
    const {inViewport} = useInViewport(myRef, {rootMargin: "-100px"}, {disconnectOnLeave: false});

    return (
      <SlideFade in={inViewport} offsetY="100px">
        <Box ref={myRef} py={8} px={16}>
          <Flex bgColor="pink.50" justify="space-evenly" align="center" p={4}>
            {children}
          </Flex>
        </Box>
      </SlideFade>
    );
}

export default Section;