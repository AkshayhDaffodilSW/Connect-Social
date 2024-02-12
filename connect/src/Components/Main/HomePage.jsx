import React from 'react'
import Navbar from './Navbar'
import CreatePost from './CreatePost'
import Feeds from './Feeds'


function HomePage() {
  return (
    <div>
      <Navbar/>
      <CreatePost />
      <Feeds/>
    </div>
  )
}

export default HomePage
