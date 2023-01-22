import Layout from '../components/layouts/article'
import Section from '../components/section'
import {Heading, Text} from '@chakra-ui/react'

const Works = () => (
    <Layout title="Works">
        <Section delay={0.1}>
            <Heading as="h3" fontSize={20} mb={4} marginTop="15">
            Works
            </Heading>
        </Section>
        <Section delay={0.2}>
            <Text marginTop={-5}>There will be projects here in the future!</Text>
        </Section>
    </Layout>
)

export default Works
export {getServerSideProps} from '../components/chakra'