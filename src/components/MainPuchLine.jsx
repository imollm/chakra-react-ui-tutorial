import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import illustration from '../assets/illustration.svg'

export default function MainPuchLine () {
  return (
    <Container maxWidth='container.xl'>
      <Flex>
        <Box>
          <Heading as='h1' size='2xl'>
            <Box fontWeight='bold'>Dive in! There are so many things to do in Meetup</Box>
          </Heading>
          <Box mt={6} fontWeight='medium'>
            Join a group to meet people, make friends, find support, grow a
            business, and explore your interests. Thousands of events are
            happening every day, both online and in person!
          </Box>
        </Box>
        <Box w='100%'>
          <Image w='100%' src={illustration} alt='illustration' />
        </Box>
      </Flex>
    </Container>
  )
}
