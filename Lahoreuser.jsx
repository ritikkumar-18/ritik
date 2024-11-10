
import React from 'react';
import Slider from 'react-slick'
 export default function LahoreTrips(){
   

const trips = [
    {
      title: "Prateek Mehta Ladakh itinerary",
      locations: "Ladakh, Leh - NewDelhi - Pangong Tso - Nubra",
      curator: "Prateek Mehta",
      nights: "6 nights",
      details:'4 Stays ︱ 0 Transfers ︱ 0 Flights ︱ 1 Activities',
      price: "₹79,084",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2xhZGFraC1pbi01LWRheXMtNy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',       
    },
    {
      title: "Week Long Ladakh Oddyessy",
      locations: "Leh,Ladakh - Leh - New Delhi - Nubra",
      curator: "",
      nights: "3 nights",
      details:'0 Stays ︱ 0 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "",
      people: "",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY2NDg0NzU4MDM4MTI5MjgxOTk3NjgwNjY0MDYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',
    },
    {
      title: "Pratham's Ladakh Trip Beyond the Tourist",
      locations: "Kargil - Leh, Ladakh - Pangong Tso - New Delhi",
      curator: "Amendra",
      nights: "7 nights",
      details:'7 Stays ︱ 1 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹26,824",
      people: "for  person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY1MTAzOTQzNTU4MzY3NDkwNzY4NDMyNjE3MTg4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
   
    },
    {
      title:'Week Long Ladakh Oddyessy',
      locations:'Leh,Ladakh - Leh - New Delhi - Nubra',
      curator:'us',
      nights:'6 nights',
      details:'4 Stays ︱1 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹1,16,052',
      people:'for 4 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY2NDg0NzU4MDM4MTI5MjgxOTk3NjgwNjY0MDYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',
    },
    {
        title:'Kashmir Ladakh Escapade',
        locations:'Kargil - Leh - Ladakh - Srinagar - Pangong Tso - New Delhi',
        curator:'Amrendra',
        price:'₹1,14,169',
        people:'for 4 person',
        nights:'7 nights',
        details:'6 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3NhbmdhbS1wb2ludC1sZWgtbGFkYWtoLTExMTh4NTMwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',

    },

    {
       title:'Ladakh Adventure with Buddies',
       locations:'Leh,Ladakh - Uleytopko - Leh - Pangong Tso',
       curator:'us',
       details:'5 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹1,17,464',
       people:'for 4 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2xlaDEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',
    },
  ];
  const settings = {
   dots:true,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 2000,
   cssEase: "linear"
 };

   return (
           <div className='p-6 bg-gray-100'>
               <h1 className='text-4xl font-bold mb-16'>Trip by our users</h1>
               <div className='grid md:grid-cols-1 mx-auto gap-4'>
               <Slider {...settings}>
               {trips.map((trip,index)=>(
               <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden mx-auto mb-10'>
                   <img src={trip.image}alt={trip.name} className='w-full h-48 object-cover'/>
                   <div className='p-4'>
                       <h2 className='text-lg font-semibold'>{trip.title}</h2>
                       <p className='text-sm text-gray-500'>{trip.locations}</p>
                       <p className='text-xs text-gray-400'>{trip.curator}</p>
                       <div className='text-gray-700 text-sm mt-2'>
                           <p>{trip.details}</p>
                       </div>
                       <div className=' flex justify-between items-center mt-4'>
                           <div>
                               <p className='text-lg font-semibold'>{trip.price}</p>
                               <p className='text-xs text-gray-500'>{trip.people}</p>
                           </div>
                           <div className='text-center'>
                           <button className='bg-yellow-400 text-black px-3 py-1 rounded hover:bg-black hover:text-white'>View Details</button></div>
                       </div>
                   </div>
                   
                </div>     
            ))}
            </Slider>
                   </div>
       </div>
      
  )}