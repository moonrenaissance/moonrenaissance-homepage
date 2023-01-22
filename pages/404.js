import NextLink from 'next/link'
import {Box, 
        Heading, 
        Text,
        Container, 
        Devider, 
        Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1" Text="Not found"/>
            <Text>The page you're looking for was not found.</Text>
            <Devider my={6} />
            <Box my={6} align="center">
                <Button as={NextLink} href="/" colorScheme="teal">
                    Return to Home
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound