import React from 'react'
import { 
  Card, 
  Avatar,
  Flex
} from '@chakra-ui/react'
import Logo from './Logo'

function Navbar() {
  return (
    <div>
      <Card>
          <Flex 
          py={1.5}
          px={8}>
        
            <Logo/>

            <Flex 
            flex='1' 
            alignItems='center' 
            flexWrap='wrap'
            />

            <Avatar size='md'/>
          </Flex>
      </Card>
    </div>
  )
}

export default Navbar
