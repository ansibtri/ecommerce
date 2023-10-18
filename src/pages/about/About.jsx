import React from 'react'
import './about.css'
import Banner from '../../shared/components/banner/Banner' // shared banner component
import Timeline from './timeline/Timeline'

const About = () => {
  return (
    <>
    {/* // page banner component from src/shared/components/banner/Banner.jsx  */}
    <Banner title="About" image="/assets/01_Home13.jpg"/>
    {/* about us */}
    <div className="about-us">
      <div className="about-us__title">
        <h2>Our JOURNEY</h2>
        <hr/>
        <Timeline/>
      </div>
    </div>
    </>
  )
}

export default About