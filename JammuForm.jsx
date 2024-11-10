  // import React from "react";

  // function WhyPlanWithUs() {
  //   const features = [
  //     {
  //       title: "Personalization in seconds",
  //       description: "Personalized and flexible itineraries crafted by our AI-powered planner.",
  //       icon: "/path-to-icon-1.png",  Ensure this path is correct or replace it with a URL
  //       bgColor: "bg-pink-100"
  //     },
  //     {
  //       title: "Real-Time Negotiated Bookings",
  //       description: "Dedicated travel experts negotiate the best prices within your budget.",
  //       icon: "/path-to-icon-2.png",
  //       bgColor: "bg-red-100"
  //     },
  //     {
  //       title: "Book-it-all in one click",
  //       description: "Book all your personalized and flexible travel needs in just one click.",
  //       icon: "/path-to-icon-3.png",
  //       bgColor: "bg-blue-100"
  //     },
  //     {
  //       title: "24x7 Live Assistance",
  //       description: "24x7 support that keeps you swinging all day and night, no monkey business.",
  //       icon: "/path-to-icon-4.png",
  //       bgColor: "bg-green-100"
  //     },
  //     {
  //       title: "Offbeat Experiences, curated for you",
  //       description: "Discover offbeat adventures, activities & experiences.",
  //       icon: "/path-to-icon-5.png",
  //       bgColor: "bg-purple-100"
  //     },
  //     {
  //       title: "Transparent Pricing",
  //       description: "Transparent pricing with no hidden fees - pay only a small service fee!",
  //       icon: "/path-to-icon-6.png",
  //       bgColor: "bg-teal-100"
  //     }
  //   ];

  //   return (
  //     <div className="p-6 bg-gray-50">
  //       <h1 className="text-2xl font-bold mb-4">Why plan with us?</h1>
  //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
  //         {features.map((feature, index) => (
  //           <div
  //             key={index}
  //             className={'flex items-start p-4 rounded-lg ${feature.bgColor}'}
  //           >
  //             <img
  //               src={feature.icon}
  //               alt={'${feature.title} icon'}
  //               className="w-10 h-10 mr-4"
  //             />
  //             <div>
  //               <h2 className="text-lg font-semibold">{feature.title}</h2>
  //               <p className="text-sm text-gray-600">{feature.description}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
  //         <h2 className="text-xl font-semibold mb-4">Get your free travel plan now</h2>
  //         <form className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               What do you want to explore?
  //             </label>
  //             <div className="flex space-x-2 mt-2">
  //               <input
  //                 type="text"
  //                 placeholder="Departing from"
  //                 className="w-full p-2 border rounded"
  //               />
  //               <input
  //                 type="text"
  //                 placeholder="Destination"
  //                 className="w-full p-2 border rounded"
  //               />
  //             </div>
  //             <button type="button" className="text-blue-500 mt-2">
  //               + Add Destination
  //             </button>
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               When are you planning to travel?
  //             </label>
  //             <div className="flex space-x-2 mt-2">
  //               <input
  //                 type="date"
  //                 className="w-full p-2 border rounded"
  //               />
  //               <input
  //                 type="date"
  //                 className="w-full p-2 border rounded"
  //               />
  //             </div>
  //           </div>
  //           <div className="flex items-center">
  //             <input
  //               type="checkbox"
  //               className="mr-2"
  //             />
  //             <label className="text-sm text-gray-700">
  //               Not sure? Let us decide best time for your trip.
  //             </label>
  //           </div>
  //           <button
  //             type="submit"
  //             className="w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500"
  //           >
  //             Continue
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }

  // export default WhyPlanWithUs;
 import React from 'react';

 const WhyPlanWithUs = () => {
   const features = [
     {
       image: 'https:d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-1.png',
       title: 'Personalization in seconds',
       description: 'Personalized and flexible itineraries crafted by our AI-powered planner.',
       bgColor: 'bg-orange-100',
     },
     {
       image: 'https:d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-2.png',
       title: 'Real-Time Negotiated Bookings',
       description: 'Dedicated travel experts negotiate the best prices within your budget.',
       bgColor: 'bg-red-100',
     },
     {
       image: 'https:d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-3.png',
       title: 'Book-it-all in one click',
       description: 'Book all your personalized and flexible travel needs in just one click.',
       bgColor: 'bg-blue-100',
     },
     {
       image: 'https:d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-4.png',
       title: '24x7 Live Assistance',
       description: '24x7 support that keeps you swinging all day and night, no monkey business!',
       bgColor: 'bg-green-100',
     },
     {
       image: 'https:d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-5.png',
       title: 'Offbeat Experiences, curated for you',
       description: 'Discover offbeat adventures, activities & experiences.',
       bgColor: 'bg-purple-200',
     },
     {
       image: 'https:d31aoa0ehgvjdi.cloudfront.net/media/corporates/whychooseus-6.png',
       title: 'Transparent Pricing',
       description: 'Transparent pricing with no hidden fees - pay only a small service fee!',
       bgColor: 'bg-teal-100',
     },
   ];

   return (
     <>    
     <h2 className="text-3xl font-bold mb-5 ml-28 mt-10">Why plan with us?</h2>
     <section className="flex justify-center items-center mx-20 mb-20">
       <div className="w-[70vw] h-[70vh] p-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {features.map((feature, index) => (
             <div
               key={index}
               className={`flex items-center p-4 rounded-lg ${feature.bgColor} shadow-md`}
             >
               <img
                 src={feature.image}
                 alt={feature.title}
                 className="w-12 h-12 rounded-lg mr-4"
               />
               <div>
                 <h3 className="font-bold text-2xl mb-2">{feature.title}</h3>
                 <p className="text-gray-600">{feature.description}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
       <div className="p-3  max-w-sm ">
           <h2 className="text-3xl font-bold mb-5">Get your free travel plan now</h2>
          
           <label className="block mb-2 text-lg font-bold">What do you want to explore?</label>
           <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
           <input type="text" placeholder="Jammu & Kashmir" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />

           <button type="button" className="text-blue-500 mt-2">
                + Add Destination
            </button>

          
           <label className="block mb-2 text-lg font-bold">When are you planning to travel?</label>
           <div className='text-md font-bold flex items-center justify-between mr-32 mb-1'>
             <p>Start Date</p>
             <p>End Date</p>
           </div>
          

           <div className="flex items-center justify-center space-x-4">
             <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
             <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
           </div>
           <div className="flex items-center text-center mt-3 ml-2">
             <input type="checkbox" id="unsure" className="mr-2" />
             <label htmlFor="unsure" className="text-sm font-semibold">Not sure? Let us decide best time for your trip.</label>
           </div>

           <button className="bg-yellow-300 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
             Continue
           </button>
       </div>
     </section>
     </>
   );
 };

 export default WhyPlanWithUs;

