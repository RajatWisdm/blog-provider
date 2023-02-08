import React from 'react'
import AboutUs from './AboutUs'
import Gettopic from './Gettopic'
import Navbar from './Navbar'
import Poster from './Poster'

function Home() {
  return (
    <div>
        <Poster/>
        <Gettopic/>
        <AboutUs/>
    </div>
  )
}

export default Home