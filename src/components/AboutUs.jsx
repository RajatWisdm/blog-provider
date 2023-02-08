import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div id="about">
        <h1>About Us</h1>
        <p>We are the #1 article providing application in the market. With the help of Blog Provider blog writing is just a peice of cake. We provide articles on different languages.
          We value our customer's time. Please feel free to share your thoughts or feedback <Link to="/contact" className="text-blue">here</Link>
        </p>
    </div>
  )
}

export default AboutUs