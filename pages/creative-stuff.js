import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import firstCasual from '../public/images/firstcasual.jpg'

const CreativeStuff = () => (
    <Layout title="CreativeStuff">
        <Container wrap="wrap">
            <Heading as="h3" fontSize={20} mb={4} marginTop="15">
                Videos
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem title="APEX.CASUAL"
                    thumbnail={firstCasual}
                    href="https://www.youtube.com/watch?v=Whv1GxR3wgA&t=306s"/>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default CreativeStuff
export {getServerSideProps} from '../components/chakra'