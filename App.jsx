
import { Head } from './Header'
import { Navbar } from './Navbar'
import { Content } from './Content'
import Why from './Why'
import Slide from './Slider'
import Country2 from './Countries2'
import { Form } from './Footer' 
import { Mood } from './Mood'
import { Happy } from './Happy'
import Europe from './Europe'
import {RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import { Jammu } from './Jammu'
import Jammucontent from './Jammucontent'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import Trips from './JammuTRipUSER'
import WhyPlanWithUs from './JammuForm'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import AboutJK from './Jammumap'
import { Lahore } from './Lahore'
import Lahorecontent from './Lahore.content'
import LahoreTrips from './Lahoreuser'
import Aboutlahore from './Lahoremap'
import { Otp } from './Otp'
import { JK } from './JK'


 const router=createBrowserRouter(
  [
   {
     path:'/j',
     element:<div>
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
     </div>,
   },


   {
     path:'/lahore',
     element:<div>
       <Navbar/>
       <Lahore/>
       <Lahorecontent/>
       <LahoreTrips/>
       <Aboutlahore/>
       <Button/>
       <Slides/>
       <WhyPlanWithUs/>
       <Happy/>
       <Jammuarticle/>
       <Jammucontact/>
       <Form/>
     </div>,
   },
  ]
 )



function App() {

  return (
    <>
    <RouterProvider router={router}/>
    <Navbar/>
      <Head/>
      <Content/>
      <Slide/>
      <Country2/>
      <Europe/>
      <Mood/>
      <Why/>
      <Happy/>
      <Form/>
      <Otp/>
    </>
  )
}

export default App
