import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { ColorModeSwitcher } from './ColorModeSwitcher'

const menuMap = new Map<string, string>([
  ['Saves', 'saves'],
  ['Archives', 'archives'],
  ['My Stats', 'my_stats']
])

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as='section' pb={{ base: '12', md: '24' }}>
      <Box as='nav' bg='bg.surface' boxShadow='sm'>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing='10' justify='space-between'>
            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                {/* Menus */}
                <ButtonGroup variant='text' colorScheme='gray' spacing='8'>
                  {['Saves', 'Archives', 'My Stats'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>

                {/* Sign in/ up */}
                <HStack spacing='3' justifySelf='flex-end'>
                  <Button variant='tertiary'>Sign in</Button>
                  <Button variant='primary'>Sign up</Button>

                  {/* Light/dark mode */}
                  <ColorModeSwitcher />
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant='tertiary'
                icon={<FiMenu fontSize='1.25rem' />}
                aria-label='Open Menu'
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
