
import { faTwitter ,faFacebook,faInstagram,faLinkedin,faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Form = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-yellow-400 p-8 rounded-lg max-w-4xl mx-auto mt-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Join The Tarzan Way Community</h2>
        <p className="text-gray-700 mb-4">Get Early Bird Deals, Extra Discounts & Priority Customer Support.</p>
        

        <div className="flex justify-center items-center space-x-4">
          <input type="text" placeholder="First name"className="p-3 border border-gray-300 rounded-lg focus:outline-none"/>
          <input type="email" placeholder="Email address" 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none"/>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold">Subscribe Now</button>
        </div>
      </div>

      <footer className='bg-black text-white mt-8 py-10 w-full'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='mb-6 md:mb-0'>
              <h3 className='font-bold text-lg'>The Tarzan Way</h3>
              <p className='text-gray-400 mt-2 mx-w-xs'>The Tarzan Way is a travel-based startup<br/> with the vision to simplify travel<br/> and build immerisve travel programs across India.</p>
              <div className='flex gap-5 mt-4 '>
              <FontAwesomeIcon icon={faTwitter} className='text-gray-400 hover:text-white cursor-pointer text-4xl'/>
              <FontAwesomeIcon icon={faFacebook} className='text-gray-400 hover:text-white cursor-pointer text-4xl'/>
              <FontAwesomeIcon icon={faInstagram} className='text-gray-400 hover:text-white cursor-pointer text-4xl'/>
              <FontAwesomeIcon icon={faLinkedin} className='text-gray-400 hover:text-white  cursor-pointer text-4xl'/>
              <FontAwesomeIcon icon={faPinterest} className='text-gray-400 hover:text-white cursor-pointer text-4xl'/>
              </div>

              <div className='mt-8 text-white space-y-1'>
                <h4 className='font-bold'>Contact Us</h4>
                <div className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faPhone} className='text-gray-400 hover:text-white cursor-pointer text-2xl'></FontAwesomeIcon>
                  <span className='text-gray-400'>+91 9582125476</span>
                </div>

                <div className=' mt-4 flex items-center gap-2 '>
                  <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 hover:text-white cursor-pointer text-2xl'></FontAwesomeIcon>
                  <span className='text-gray-400'>info@thetarzanway.com</span>
                </div>

              </div>
            </div>
            


            <div className='flex gap-10'>
              <div>
                <h4 className='font-semibold'>Travel Destinations</h4>
                <ul className='mt-2 text-gray-400 space-y-2'>
                  <li>Europe</li>
                  <li>Asia</li>
                  <li>North America</li>
                  <li>South America</li>
                  <li>Austraila & New Zealand</li>
                  <li>Africa</li>
                  <li>Caribbean</li>
                </ul>
              </div>


              <div>
                <h4 className='font-semibold'>Travel Styles</h4>
                <ul className='mt-2 text-gray-400 space-y-2'>
                  <li>Personalize</li>
                  <li>Workcation</li>
                  <li>Volunteer</li>
                  <li>Road Trips</li>
                  <li>Unique</li>
                </ul>
              </div>


              <div>
                <h4 className='font-semibold'>Company</h4>
                <ul className='mt-2 text-gray-400 space-y-2'>
                  <li>Blogs</li>
                  <li>For Corporates</li>
                  <li>Testimonials</li>
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>


              <div>
                <h4 className='font-semibold'>Term & Policies</h4>
                <ul className='mt-2 text-gray-400 space-y-2'>
                  <li>Terms of Services</li>
                  <li>Privacy Policy</li>
                  <li>Covid-19 Safety</li>
                  <li>Subscribe</li>
                </ul>
              </div>


            </div>
          </div>

          <div className='text-center text-gray-500 mt-8 border-t border-gray-700 pt-4'>
            <p>Copyright © 2018 - 2024 Tarzan Way Travels Private Limited. All Rights Reserved</p>
          </div>
        

       </div>
      </footer>
      </div>
  );
}

export default Form;
