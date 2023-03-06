import { Box, Image, Container, Flex, Grid, Link, Badge } from '@chakra-ui/react'
import imageOne from '../assets/image-one.jpg'
import imageTwo from '../assets/image-two.jpg'
import imageThree from '../assets/image-three.jpg'
import rightArrow from '../assets/right-arrow.svg'

const badges = [
  'Boost your career',
  'Find your zen',
  'Get moving',
  'Share language + culture',
  'Read with friends',
  'Write togheter',
  'Hone your craft'
]

export default function Banner () {
  return (
    <>
      {/* Three boxes */}

      <Container maxW='container.xl' mt={10}>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
          <Box>
            <Image w='100%' borderRadius='lg' src={imageOne} alt='make a friend' />
            <Link href='#' fontWeight='bold' color='blue.100' display='flex' gap={2}>
              Make new friend
              <Image w='20px' src={rightArrow} alt='arrow right' />
            </Link>
          </Box>
          <Box>
            <Image w='100%' borderRadius='lg' src={imageTwo} alt='explore the outdoors' />
            <Link href='#' fontWeight='bold' color='blue.100' display='flex' gap={2}>
              Explore the outdoors
              <Image w='20px' src={rightArrow} alt='arrow right' />
            </Link>
          </Box>
          <Box>
            <Image w='100%' borderRadius='lg' src={imageThree} alt='connect over tech' />
            <Link href='#' fontWeight='bold' color='blue.100' display='flex' gap={2}>
              Connect over tech
              <Image w='20px' src={rightArrow} alt='arrow right' />
            </Link>
          </Box>
        </Grid>
      </Container>

      {/* pills */}

      <Container maxW='container.xl' mt={3}>
        <Flex flexWrap='wrap' justifyContent='space-between'>
          {badges.map(badge => {
            return (
              <Badge key={badge} borderRadius='3xl' px={4} py={2.5} mr='4' mb='4' textTransform='normal' color='#ffffff' bg='blue.100'>
                {badge}
              </Badge>
            )
          })}
        </Flex>
      </Container>
    </>
  )
}
