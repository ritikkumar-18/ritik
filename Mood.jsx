import React from 'react';

export const Mood = () => {
  return (
      <div>
       <h1 className='text-4xl font-bold px-10 mb-10 mt-10'>Plan trip as per mood</h1>
       <div className="grid grid-cols-4 gap-3 p-4 w-[80vw] mx-auto">
         {/* Offbeat Trip Planner (Top-left large image) */}
         <div className="relative col-span-4 md:col-span-2 row-span-1 h-80">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODgzNDM5OTM2MTYxMDQxMjU5NzY1NjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Offbeat Trip Planner"
             className="w-full h-full object-cover rounded-lg  cursor-pointer transform translate duration-300 hover:scale-105"
           />
           <div className="absolute top-4 left-4 text-white text-xl font-bold">
             Offbeat Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-xl font-light'>Explore!</span>
         </div>

         {/* Workcation Trip Planner (Top-right small image) */}
         <div className="relative col-span-2 md:col-span-2 h-60">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDU3NDI5ODg4NTM1OTc2NDA5OTEyMTA5MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Workcation Trip Planner"
             className="w-full h-full object-cover rounded-lg cursor-pointer transform translate duration-300 hover:scale-105"
           />
           <div className="absolute top-4 left-4 text-white text-xl font-bold">
             Workcation Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-xl font-light'>Explore!</span>
         </div>

         {/* Road Trip Planner (Bottom-left small image) */}
         <div className="relative col-span-2 md:col-span-1 h-60 w-80">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODk1ODQ2MDk3OTQ2MTY2OTkyMTg3NTAucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Road Trip Planner"
             className="w-full h-full object-cover rounded-lg cursor-pointer transform translate duration-300 hover:scale-105"
           />
           <div className="absolute top-4 left-4 text-white text-xl font-bold">
             Road Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-xl font-light'>Explore!</span>
         </div>

         {/* Trips Planned (Center text box) */}
         <div className="flex items-center justify-center h-60 w-44 mr-4 border border-black rounded-lg col-span-2 md:col-span-1 relative left-20 ">
           <div className="text-center">
             <h2 className="text-4xl font-bold">71k+</h2>
             <p className="text-lg font-semibold">Trips Planned so far.</p>
           </div>
         </div>

         {/* Volunteer Trip Planner (Bottom-right small image) */}
         <div className="relative col-span-4 md:col-span-2 h-80 w-auto bottom-20">
           <img
             src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDczMzE2MTAyNDY5NDQ0Mjc0OTAyMzQzNzUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
             alt="Volunteer Trip Planner"
             className="w-full h-full object-cover rounded-lg cursor-pointer transform translate duration-300 hover:scale-105"
           />
           <div className="absolute top-4 left-4 text-white text-xl font-bold">
             Volunteer Trip Planner
           </div>
           <span className='absolute top-12 left-5 text-white text-xl font-light'>Explore!</span>
         </div>
       </div>
       <div className='flex items-center justify-center -mt-10'>
       <button className="bg-yellow-400 hover:bg-black text-black hover:text-white border border-black text-center transition-all font-semibold py-2 px-10 rounded-lg">Create your free itinerary</button>
       </div>
      </div>
  );
};

export default Mood

