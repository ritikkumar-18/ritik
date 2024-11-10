
 import React from 'react';
 import Slider from 'react-slick'
  export default function Trips(){
    

 const trips = [
     {
       title: "Nikita Romantic Getaway to Jammu & Kashmir",
       locations: "Gulmarg - Sonamarg - Srinagar",
       curator: "Nikita Awchar",
       nights: "6 nights",
       details:'5 Stays ︱ 3 Transfers ︱ 2 Flights ︱ 1 Activities',
       price: "₹97,832",
       people: "for 2 person",
       image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTQwMDM1MDgwMDM4NjAyMzUyMTQyMzMzOTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',       
     },
     {
       title: "Winter Wonderland Kashmir",
       locations: "Gulmarg - Srinagar - Pahalgam - New Delhi",
       curator: "Handcrafted by us",
       nights: "5 nights",
       details:'5 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities  ',
       price: "₹89,540",
       people: "for 2 person",
       image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',
     },
     {
       title: "Kashmir Ladakh Escapade",
       locations: "Kargil - Leh - Ladakh - Srinagar - Pangong Tso - New Delhi",
       curator: "Amendra",
       nights: "7 nights",
       details:'6 Stays ︱ 1 Transfers ︱ 0 Flights ︱0 Activities',
       price: "₹1,14,169",
       people: "for 4 person",
       image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3NhbmdhbS1wb2ludC1sZWgtbGFkYWtoLTExMTh4NTMwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',
    
     },
     {
       title:'NY in Winter Wonderland of Kashmir',
       locations:'Gulmarg - Srinagar - Pahalgam',
       curator:'Physics Wallah',
       nights:'4 nights',
       details:'4 Stays ︱1 Transfers ︱ 0 flights ︱ 0 Activities',
       price:'₹10,828',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==',
     },
     {
         title:'Nikhil Getaway with friends to Vaishno Devi',
         locations:'Vaishno Devi',
         curator:'Nikhil Parmar',
         price:'₹10,000',
         people:'for 3 person',
         nights:'4 nights',
         details:'0 Stays ︱ 0 Transfers ︱0 Flights ︱ 0 Activities ',
         image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2MDYyMjg1MzQ0NjAwNjc3NDkwMjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19',

     },

     {
        title:'Abhishek family Excrusion in Jammu & Kashmir',
        locations:'Sonmary - Srinagar - Pahalgam',
        curator:'Abhishek',
        details:'4 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities ',
        price:'₹2,12,926',
        people:'for 9 person',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0Mjk0OTE1MTI1NzAzODExNjQ1NTA3ODEyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
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
