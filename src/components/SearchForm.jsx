import { Container, Grid, Flex, Heading, FormControl, Input, Image, Button, Badge } from '@chakra-ui/react'
import lens from '../assets/lens.svg'
import location from '../assets/location.svg'

const happeningBadges = [
  'Starting soon',
  'Today', 'Tomorrow',
  'This week', 'Online',
  'In person',
  'Trending near you'
]

export default function SearchForm () {
  return (
    <Container maxW='container.xl' mt='70px'>
      <Grid gridTemplateColumns='repeat(2, 1fr)' gap='70px'>
        <Flex flexDir='column' gap='20px'>
          <Heading as='h3'>What do you want to do?</Heading>
          <Flex gap={3}>
            <FormControl flexBasis='50%'>
              <Input placeholder='Search for "tennis"' pl='30px' />
              <Image src={lens} alt='lens' height='20px' width='20px' position='absolute' top='10px' left='7px' />
            </FormControl>
            <FormControl flexBasis='50%' position='relative'>
              <Input placeholder='Location' pl='30px' />
              <Image src={location} alt='location' height='20px' width='20px' position='absolute' top='10px' left='7px' />
            </FormControl>
          </Flex>
          <Button textAlign='center' bgColor='red.200' color='white'>Search</Button>
        </Flex>
        <Flex flexDir='column' gap='20px'>
          <Heading as='h3'>See what's happening</Heading>
          <Flex flexWrap='wrap'>
            {happeningBadges.map(badge => {
              return (
                <Badge key={badge} borderRadius='3xl' px={4} py={2.5} mr='4' mb='4' textTransform='normal' color='#ffffff' bg='blue.100'>
                  {badge}
                </Badge>
              )
            })}
          </Flex>
        </Flex>
      </Grid>
    </Container>
  )
}
