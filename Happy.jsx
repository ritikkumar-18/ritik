import React from 'react'
const way=[
  {
    name:"Nisarga Gauda",
    location:'5 Days-Kashmir',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9leHBsb3JlcnMvbmlzYWdyYS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    review: " The Tarzan way team I can’t thank you enough for helping me plan my trip. You guys are amazing. Janhavi & Devyani and the entire team kept checking on me. The entire team was so responsive & planned everything really well. I will definitely recommend TTW for any trip. Kudos to you guys. Lots of Love❤️❤️",
    rating:5,
  },

   {
    name:'Prashant Sharma',
    location:'6 Days-Kashmir',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9leHBsb3JlcnMvcHJhc2VuamVldC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6OTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    review:'Thank you The Tarzan Way...It was an experience to remember and very moderate experience cost..Love the way they handled things. Perfect hotels, rich experience and memories to collect. Thanks TTW.. will definitely look forward to the next trip..',
    rating: 5,
   },

   {
    name:'Hema Chandhiran',
    location:'8 Days-North East',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9JTUctMjAyMjEyMzEtV0EwMDI3LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIifX19',
    review:'Thank you for the trip plan TTW. We had a lot of fun. Please convey our gratitude for the cab driver. He was very humble, polite and helpful.',
    rating:5,
   },

   {
    name:'Eric Dsouza',
    location:'7 Days-Meghalaya',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9JTUctMjAyMjEyMjAtV0EwMDI1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjkwMCwiZml0IjoiY292ZXIifX19',
    review:'Devayani and her team have been amazing from their meticulous attention to detail, to answering all my queries and their unwavering support via chat and call throughout our journey. Our trip was memorable thanks to the team at The Tarzan Way. I cannot recommend them enough!',
    rating:5,
   },
];

const StarRating=({count})=>{
  return(
    <div className='flex'>
      {[...Array(count)].map((_,i)=>(
        <svg key={i} className='w-5 h-5 text-yellow-500' fill='currentColor'viewBox='0 0 24 24'>
          <path d='M12 17.27l5.18 3.75-1.64-5.81L20 10.5l-5.87-.04L12 4.5l-2.13 5.96L4 10.5l4.46 4.69L6.82 21z'/>
        </svg>
      ))}
    </div>
)
}

const HappyCard=({happy})=>{
  return(
    <div className='bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4'>
      <img src={happy.image}alt={happy.name}className='w-full md:w-1/3 h-48 object cover rounded-lg'/>
      <div className='flex flex-col justify-between'>
        <p className='text-gray-700'>{happy.review}</p>
        <div className='mt-4'>
          <h3 className='text-lg font-semibold text-gray-800'>{happy.name}</h3>
          <p className='text-gray-500'>{happy.location}</p>
          <StarRating count={happy.rating}/>
          <button className='mt-2 px-4 py-2 bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold rounded-lg'>See itinerary</button>
        </div>
      </div>
    </div>
  )
}


export const Happy = () => {
  return (
    <div className='p-6 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-12 mt-10'>Happy community of The Tarzan Way</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>{way.map((happy,index)=>(
        <HappyCard key={index} happy={happy}/>
      ))}</div>

      <div className='bg-gray-100 mt-10 text-center mb-14'>
        <button className='mt-2 py-2 px-4 translate-all border border-black rounded-lg'>View all</button>
      </div>

    </div>
  )
}

