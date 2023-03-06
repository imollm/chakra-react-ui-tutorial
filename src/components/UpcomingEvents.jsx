import { Container, Flex, Grid, Heading, Link } from '@chakra-ui/react'
import upcommingOne from '../assets/upcomming-one.png'
import upcommingTwo from '../assets/upcomming-two.jpg'
import upcommingThree from '../assets/upcomming-three.jpg'
import upcommingFour from '../assets/upcomming-four.jpg'
import CardEvent from './CardEvent'

const upcomingEvents = [
  {
    mainImage: upcommingOne,
    date: 'SAT, AUG 21 @ 7:45 PM NPT',
    title: '📌 Technologies for Personal Financial Planning',
    subtitle: 'Financial Planning and Investing f...',
    footer: {
      shares: 58,
      avatars: [
        'https://bit.ly/ryan-florence',
        'https://bit.ly/kent-c-dodds',
        'https://bit.ly/code-beast'
      ]
    }
  },
  {
    mainImage: upcommingTwo,
    date: 'THU, AUG 19 @ 5:45 PM NPT',
    title: 'GraphQL Meetup 10.0',
    subtitle: 'GraphQL Bangkok',
    footer: {
      shares: 143,
      avatars: [
        'https://bit.ly/ryan-florence',
        'https://bit.ly/kent-c-dodds',
        'https://bit.ly/code-beast'
      ]
    }
  },
  {
    mainImage: upcommingThree,
    date: 'SUN, AUG 15 @ 9:45 PM NPT',
    title: 'El Poder del Ahora de Eckhart Tolle',
    subtitle: 'Club de la Lectura internacional._',
    footer: {
      shares: 41,
      avatars: [
        'https://bit.ly/ryan-florence',
        'https://bit.ly/kent-c-dodds',
        'https://bit.ly/code-beast'
      ]
    }
  },
  {
    mainImage: upcommingFour,
    date: 'TUE, AUG 17 @ 9:45 PM NPT',
    title: 'The What & Why of Continous Discovery with Teresa Torres',
    subtitle: 'Stockholm Engineering Leadershi...',
    footer: {
      shares: 100,
      avatars: [
        'https://bit.ly/ryan-florence',
        'https://bit.ly/kent-c-dodds',
        'https://bit.ly/code-beast'
      ]
    }
  }
]

export default function UpcomingEvents () {
  return (
    <Container maxW='container.xl' mt='100px'>

      {/* Header */}

      <Flex justifyContent='space-between'>
        <Heading as='h5' fontWeight='bold'>
          Upcoming online events
        </Heading>
        <Link href='#' color='blue.100'>
          Explore more events
        </Link>
      </Flex>

      {/* Slider */}

      <Grid templateColumns='repeat(4, 1fr)' mt='20px'>

        {/* Cards */}

        {
            upcomingEvents.map(({ mainImage, date, title, subtitle, footer }) => {
              return (
                <CardEvent
                  key={title}
                  upcommingImg={mainImage}
                  date={date}
                  title={title}
                  subtitle={subtitle}
                  shares={footer.shares}
                  avatars={footer.avatars}
                />
              )
            })
        }

      </Grid>
    </Container>
  )
}
