import { Box, Heading } from "@chakra-ui/react"

const Section = ():JSX.Element => {
    return (
        <Box w="100vw" h="200px" bgColor="pink.200">
            <Heading>This is a section</Heading>
            Hello!
        </Box>
    )
}

export default Section;