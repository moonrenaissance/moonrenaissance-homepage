import {Container,
        Box,
        Link,
        Heading,
        Button,
        List,
        ListItem,
        useColorModeValue,
        chakra} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub, IoLogoSteam, IoLogoYoutube} from 'react-icons/io5'
import Image from 'next/image'
import NextLink from 'next/link'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box borderRadius='lg' 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} 
            mb={6} 
            align="center"
            margin={10}
            css={{backdropFilter: 'blur(10px)'}}>
                Conquer Olympus, Show The Flight!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Daniel 'Moonlight' Clover
                    </Heading>
                    <p>
                        (Artist / Developer)
                    </p>
                </Box>
                
                <Box flexShrink={0}
                mt={{base: 4, md:0}}
                ml={{md: 6}}
                textAlign="center">

                    <Box borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden">
                    <ProfileImage src="/images/daniel.jpg"
                    alt="Profile image"
                    borderRadius={"full"}
                    width="100"
                    height="100"/>
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                     About me
                </Heading>
                <Paragraph>
                At a very early age, I got acquainted with videogames, 
                loved hanging out in various classic games of that time 
                (Sonic, Crash Bandicoot, Warcraft and many others), grew up 
                on Sega, PS1, Spider-Man '94, Back to the Future and Harry Potter.
                In the future, this influenced my interests, I started studying cinema,
                watched and read a lot of different video essays/essays. A little later
                I remembered about my passion in the face of videogames and
                I wanted to learn more about how they are developed. That's how I 
                got to know programming. In the process of learning, I realized that 
                programming is an incredibly big subject with different branches, paths, 
                technologies. And to this day I continue to learn all this. Who knows, 
                maybe someday I will do something that will be able to approach those games 
                and movies that I admired as a child.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button as={NextLink} 
                    href="/works"
                    scroll={false}
                    rightIcon={<ChevronRightIcon />}
                    colorScheme="teal">
                        My portfolio
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                <BioYear>2004</BioYear>
                    Born in Russia.
                </BioSection>
                <BioSection>
                <BioYear>2020</BioYear>
                    Started to study programming and web-design
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    My hobbies/passions
                </Heading>
                <Paragraph>
                    Art, Cinema, Videogames, Reading, Music, Making Music/Videos
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/moonrenaissance" target="_blank">
                            <Button variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoGithub/>}>
                                @moonrenaissance
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.youtube.com/channel/UCI0GNmz9VS5Gg0dAI41HkkA" target="_blank">
                            <Button variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoYoutube/>}>
                                @danya_clover
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://steamcommunity.com/id/fadingmoonlight" target="_blank">
                            <Button variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoSteam/>}>
                                lunaris lux
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'