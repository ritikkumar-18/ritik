import React from 'react'
import { Navbar } from './Navbar'
import { Jammu } from './Jammu'
import Jammucontent from './Jammucontent'
import Trips from './JammuTRipUSER'
import AboutJK from './Jammumap'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Form from './Footer'

export const JK = () => {
  return (
    <>
    <Navbar/>
    <Jammu/>
    <Jammucontent/>
    <Trips/>
    <AboutJK/>
    <Button/>
    <Slides/>
    <WhyPlanWithUs/>
    <Happy/>
    <Jammuarticle/>
    <Jammucontact/>
    <Form/>

    </>
)};


