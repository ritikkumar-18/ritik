import React from 'react'
const destinationsData = [
    {
      name: "United Arab Emirates",
      price: "₹40,295/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMzMTEwNjI1NDMxNTM3NjI4MTczODI4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19", 
    },
    {
      name: "Hong kong",
      price: "₹39,133/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTkyMzMzNDg5OTk1MDAyNzQ2NTgyMDMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
    },
    {
      name: "Maldives",
      price: "₹26,551/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE3MDM1OTk2NTc3MDc0NzgwNDY0MTcyMzYzMjgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
    },
    {
      name: "SriLanka",
      price: "₹16,916/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjAyOTAzMTkwNTEyNjU3MTY1NTI3MzQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
    },
    { 
      name: "India",
      price: "₹15,538/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODYyODQ1MjI4MzI3MDIzOTgzMDAxNzA4OTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
    },
    {
      name: "Thailand",
      price: "₹15,838/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE4MDA5NTQwMDAyMzQ2MDM4ODE4MzU5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Malaysia",
      price: "₹28,538/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA4OTQ3MTMwODg5ODkyNTc4MTI1MDAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Indonesia",
      price: "₹19,538/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjIyNTM2ODMzNTMxODU2NTM2ODY1MjM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Vietnam",
      price: "₹17,500/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ1OTUwNDA0NDc3MTE5NDQ1ODAwNzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Singapore",
      price: "₹81,404/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE3MDM1OTcwMjQ5Mjc2Mzk0ODQ0MDU1MTc1NzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Bhutan",
      price: "₹31,555/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODc3ODY0NDI1NDgzMzU3OTA2MzQxNTUyNzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Taiwan",
      price: "₹13,555/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMzODY1ODg5MTIwMTAxOTI4NzEwOTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Oman",
      price: "₹26,479/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjM2MTMyMzE2MTk1OTY0ODEzMjMyNDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Jordan",
      price: "₹30,852/per day",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTg0Nzc2ODI5NjcxODU5NzQxMjEwOTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    {
      name: "Iraq",
      price: "₹3,860/per day",
      image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE2NDk5NTA5MjI5NjYwMDM0MTc5Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
    },
    

  ];
  
   export const Countries = () => {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Top Countries to visit in Asia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {destinationsData.map((destination, index) => (
              <div key={index} className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg">
                <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover opacity-75" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                  {destination.price ? (
                    <p className="text-sm">From {destination.price}/- per day</p>
                  ) : (
                    <p className="text-sm">{destination.description}</p>
                  )}
                  {destination.price && (
                    <button className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4">
                      Plan a trip
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center ">
        <button className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4 ">Create your trip all around in the World</button>
    </div>
        </div>
      </section>
    );
  };