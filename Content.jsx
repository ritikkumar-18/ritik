import React from 'react'

export const Content = () => {
  return (
    <section className="py-1 bg-gray-100">
        <h2 className="text-5xl font-bold mb-6 px-10">How it works?</h2>
    <div className=" bg-gray-100 h-screen flex flex-col items-center justify-center">
    <div className=" grid grid-cols-4 gap-8 w-3/4 ">


    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img src={"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0xLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ=="}alt="image 1" className="w-350 h-350 mb-4"/>
        <div className="text-2xl font-bold mb-4">1. Handpick your selection</div>
        <p className="text-grey-700 text-center">From solo travel to worklocation, honeymoon to family travel,tell us about your mood, budget & timeline.</p>
    </div>


    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img src={"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0yLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ=="} alt="image2" className="w-350 h-350 mb-4"/>
        <div className="text-2xl font-bold mb-4">2. Unleash AI's Itinerary Wizardry! </div>
        <p className="text-grey-700 text-center">Get a unique itinerary complete personalised for you, with all bookings in one place.</p>
    </div>


    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img src={"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0zLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ=="} alt="image3" className="w-350 h-350 mb-4"/>
        <div className="text-2xl font-bold mb-4">3. Easy bookings with 24x7 Concierge </div>
        <p className="text-grey-700 text-center">From your stays to activities, book-it-all in one click,and enjoy 24x7 assistance while you explore.</p>
    </div>


    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img src={"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9ob3c0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19"} alt="image 4" className="w-350 h-350 mb-4"/>
        <div className="text-2xl font-bold mb-4">4. No Commision - Pay for what you get </div>
        <p className="text-grey-700 text-center">No hidden charges during & after bookings. Pay For What you get.</p>
    </div>


    
    </div>
    <div className="flex items-center justify-center ">
        <button className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-14 ">Plan Itinerary For Free </button>
    </div>
  </div>
  </section>
  
  )
}
