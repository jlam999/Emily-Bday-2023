import { Box, Flex, SlideFade} from "@chakra-ui/react"
import { ReactNode, useRef } from "react";
import { useInViewport } from "react-in-viewport";

const Section = ({children} : {children: ReactNode}):JSX.Element => {
    const myRef = useRef(null);
    const {inViewport, enterCount} = useInViewport(myRef, {rootMargin: "-100px"}, {disconnectOnLeave: false});

    return (
      <SlideFade in={enterCount > 0} offsetY="50px">
        <Box ref={myRef} py={8} px={16}>
          <Flex bgColor="pink.50" justify="space-evenly" align="center" p={8}>
            {children}
          </Flex>
        </Box>
      </SlideFade>
    );
}

export default Section;