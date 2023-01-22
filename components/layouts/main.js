import Head from 'next/head'
import NavigationBar from '../navigation-bar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Daniel's Homepage"/>
                <meta name="author" content="Daniel Clover"/>
                <meta name="author" content="Moonlight"/>
                <link rel="moon-clouds-icon" href="moon1.png"/>
                <link rel="shortcut icon" href="/moonset.ico" type="image/x-icon"/>
                <title>Daniel Clover - Homepage</title>
            </Head>

            <NavigationBar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}

                <Footer/>
            </Container>
        </Box>
    )
}

export default Main