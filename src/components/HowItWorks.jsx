import { Box, Container, Flex, Heading, Image, Button } from '@chakra-ui/react'
import joinAGroup from '../assets/joinagroup.svg'
import findAnEvent from '../assets/ticket.svg'
import startAGroup from '../assets/start-group.svg'

export default function HowItWorks () {
  return (
    <Container maxW='container.xl' mt='70px' gap='20px' display='flex' flexDirection='column'>
      {/* Title */}
      <Flex justifyContent='center'>
        <Flex flexDirection='column' maxW='550px' alignItems='center' gap='10px'>
          <Heading as='h4'>How Meetup works</Heading>
          <Box textAlign='center'>
            Meet new people who share your interests through online and in-person
            events. It's free to create an account.
          </Box>
        </Flex>
      </Flex>

      {/* Icons */}
      <Flex>
        <Flex flexDirection='column' alignItems='center' flexBasis='33.33%' gap='10px'>
          <Image src={joinAGroup} alt='Join a group' width='200px' />
          <Heading as='h5' fontSize='24px' textAlign='center'>
            Join a group
          </Heading>
          <Box textAlign='center' maxW='320px'>
            Do what you love, meet others who love it, find your community. The rest is history!
          </Box>
        </Flex>
        <Flex flexDirection='column' alignItems='center' flexBasis='33.33%' gap='10px'>
          <Image src={findAnEvent} alt='Join a group' width='200px' />
          <Heading as='h5' fontSize='24px' textAlign='center'>
            Find an event
          </Heading>
          <Box textAlign='center' maxW='320px'>
            Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.
          </Box>
        </Flex>
        <Flex flexDirection='column' alignItems='center' flexBasis='33.33%' gap='10px'>
          <Image src={startAGroup} alt='Join a group' width='200px' />
          <Heading as='h5' fontSize='24px' textAlign='center'>
            Start a group
          </Heading>
          <Box textAlign='center' maxW='320px'>
            You don't to be an expert to gather people together and explore shared interests.
          </Box>
        </Flex>
      </Flex>

      {/* Button */}
      <Flex justifyContent='center' mt='60px'>
        <Button bgColor='blue.100' color='white'>
          Join Meetup
        </Button>
      </Flex>
    </Container>
  )
}
