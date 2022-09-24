import React from 'react'
import Navbar from '../Components/Navbar'
import Blog from './Blog'
import Chef from './Chef'
import Contact from './Contact'
import ExclusiveItems from './ExclusiveItems'
import OurHistory from './OurHistory'
import PopularMenu from './PopularMenu'
import Testimonial from './Testimonial'
import TopBanner from './TopBanner'

const LandingPage = () => {
  return (
    
    <main>
        <TopBanner />
        <ExclusiveItems />
        <OurHistory />
        <PopularMenu />
        <Chef />
        {/* <Testimonial /> */}
        <Blog />
        <Contact />
    </main>
  )
}

export default LandingPage