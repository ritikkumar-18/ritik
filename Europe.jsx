import React from 'react';

const Europe = () => {
  return (
    <div className= 'bg-gray-100 w-auto m=auto'>
        <div className='mt-20'>
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">Plan your trip anywhere in the world</h2></div>
        </div>
    
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 ml-20">
        
      <div className=" relative flex-shrink-0 w-full md:w-3/5">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDEwMjAzNjUxNTkzNDQ2NzMxNTY3MzgyODEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19"alt="Sample"className="rounded-lg shadow-md  object-cover cursor-pointer transform translate duration-300 hover:scale-105"/>
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg'>
          <h1 className='text-5xl text-gray-100 font bold'>Europe</h1>
          <p className='text-xl text-white font-semibold text-center'></p>
          </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI1NTU4ODA3Njk0OTExOTU2Nzg3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ=='className='cursor-pointer transform translate duration-300 hover:scale-105'/>
          <h2 className="text-xl font-bold mb-2">Greece</h2>
          <p className="text-gray-700">Island Paradise</p>
        </div>

    
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQyMjU2MTkwMzkwNDQ4NTcwMjUxNDY0ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ=='className='cursor-pointer transform translate duration-300 hover:scale-105'/>
          <h2 className="text-xl font-bold mb-2">France</h2>
          <p className="text-gray-700">Gourmet Haven</p>
        </div>

        
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk2MTA5MzI1NTAxOTE4NzkyNzI0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==' className='cursor-pointer transform translate duration-300 hover:scale-105'/>
          <h2 className="text-xl font-bold mb-2">Italy</h2>
          <p className="text-gray-700">Cultural Haven</p>
        </div>

        
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ3NDYwNzI3OTQxOTg5ODk4NjgxNjQwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ=='className='cursor-pointer transform translate duration-300 hover:scale-105'/>
          <h2 className="text-xl font-bold mb-2">Switzerland</h2>
          <p className="text-gray-700">Alpine Wonderland</p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Europe;
