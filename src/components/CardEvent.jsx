import { Flex, Box, Image, AvatarGroup, Avatar } from '@chakra-ui/react'
import share from '../assets/share.svg'
import camera from '../assets/camera.svg'

export default function CardEvent ({ upcommingImg, date, title, subtitle, shares, avatars }) {
  return (
    <Flex flexDirection='column' width='100%' alignItems='center' minHeight='300px'>
      <Box position='relative'>
        <Flex alignItems='center' justifyContent='center' position='absolute' top='5px' left='5px' bgColor='gray.100' px='3px' borderRadius='5px'>
          <Image src={camera} alt='camera' width='18px' height='18px' />
          <Box fontSize={10}>Online Event</Box>
        </Flex>
        <Image src={upcommingImg} alt='upcomming one' borderRadius='5px' />
      </Box>
      <Flex flexDirection='column' gap='5px' pl='25px' pt='5px' flex={1} width='100%'>
        <Box color='gray.400' fontWeight='bold' fontSize='12px'>
          {date}
        </Box>
        <Box fontWeight='bold'>
          {title}
        </Box>
        <Box color='gray.300'>
          {subtitle}
        </Box>
        <Flex justifyContent='space-between' alignItems='flex-end' flex={1}>
          <Flex alignItems='center' justifyContent='center'>
            <AvatarGroup size='xs' max={3}>
              {
                avatars.map(avatar => {
                  const name = avatar.split('/').at(-1).replace('-', ' ')
                  return (
                    <Avatar key={name} name={name} src={avatar} />
                  )
                })
              }
            </AvatarGroup>
            <Box>{shares}</Box>
          </Flex>
          <Box>
            <Image src={share} alt='share icon' height='15px' width='15px' />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
