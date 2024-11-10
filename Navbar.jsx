import React from 'react'
import './Navbar.css'


export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white border-b shadow-sm">

    <div className="flex items-center space-x-2 relative">
      <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="logo" className="w-12 h-12 ml-20" />
      <span className="font-bold text-black absolute left-28 top-5">thetarzanway</span>
    </div>

    <div className="flex-1 mx-4 ml-72">
      <div className="relative max-w-screen-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none  "
        />
      </div>
    </div>

    <div className="flex items-center space-x-4 mr-20">
      <button className="bg-yellow-400 text-black hover:bg-black hover:text-white border border-black font-semibold py-2 px-4 rounded-md transition-all">
        Create a Trip
      </button>
      <div className="relative">
        <button className="flex items-center text-black">
          <span className="sr-only">Account Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4 0-8 1.99-8 4v2h16v-2c0-2.01-4-4-8-4z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  )
}
