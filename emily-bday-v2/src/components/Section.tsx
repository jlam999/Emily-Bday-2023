import { Box, Flex} from "@chakra-ui/react"
import { ReactNode } from "react";

const Section = ({children} : {children: ReactNode}):JSX.Element => {
    return (
      <Box py={8} px={16}>
        <Flex bgColor="pink.50" justify="space-evenly" align="center" p={4}>
          {children}
        </Flex>
      </Box>
    );
}

export default Section;