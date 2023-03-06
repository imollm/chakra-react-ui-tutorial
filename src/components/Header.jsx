import { Container, Box, Image, Button } from '@chakra-ui/react'
import brandLogo from '../assets/brand-logo.svg'

export default function Header () {
  return (
    <Container maxW='container.2xl'>
      <header>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Image boxSize='90px' src={brandLogo} alt='brand' />
          <Box>
            <Button pr={3} colorScheme='gray.600' fontSize='sm' variant='link'>Log in</Button>
            <Button colorScheme='gray.600' fontSize='sm' variant='link'>Log in</Button>
          </Box>
        </Box>
      </header>
    </Container>
  )
}
