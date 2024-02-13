import { Card } from '@chakra-ui/react'
import React from 'react'
import Feed from './Feed'

function Feeds() {
  return (
    <div>
       <Card
      maxW='600px'
      mx="auto"
      my= {10}
      boxShadow='xl'
      >
        <Feed/>
        
      </Card>
    </div>
  )
}

export default Feeds
