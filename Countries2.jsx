import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Country2 = () => {
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
    <div className= 'bg-gray-100 w-auto m=auto'>
        <div className='mt-20'>
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16">Top Countries to visit in ASIA</h2></div>
              <Slider {...settings}>

            {data.map((d) =>(
                <div className='bg-gray-100 h-[450px] text-black rounded-xl'>
                  <div className='h-56 rounded-t-xl bg-gray-100 flex justify-center items-center mx-10'>
                        <img src={d.image} alt='' className='h-60 w-full object-cover rounded-2xl  cursor-pointer transform translate duration-300 hover:scale-105'/>
                    </div>

                    <div className=' bg-gray-100 flex flex-col justify-center items-center gap-4 p-4'> 
                    <p className='text-xl font-bold'>{d.name}</p>
                    <p className="font-semibold">From {d.price}/- per day</p>
                    <button className='bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4 '>Plan a trip</button>
                    </div>
                    </div> 




            ))}
            </Slider>
        </div>
        <div className='bg-gray-100 mt-10 text-center mb-14'>
        <button className='mt-2 py-2 px-4 translate-all border border-black rounded-lg hover:bg-black hover:text-white font-semibold'>Start your journey to Asia now !</button>
      </div>
    </div>
  )
}
const data=[
    {
        name: "United Arab Emirates",
        price: "₹40,295",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMzMTEwNjI1NDMxNTM3NjI4MTczODI4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19", 
      },
      {
        name: "Hong kong",
        price: "₹39,133",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTkyMzMzNDg5OTk1MDAyNzQ2NTgyMDMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
      },
      {
        name: "Maldives",
        price: "₹26,551",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE3MDM1OTk2NTc3MDc0NzgwNDY0MTcyMzYzMjgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
      },
      {
        name: "SriLanka",
        price: "₹16,916",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjAyOTAzMTkwNTEyNjU3MTY1NTI3MzQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
      },
      { 
        name: "India",
        price: "₹15,538",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODYyODQ1MjI4MzI3MDIzOTgzMDAxNzA4OTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19",
      },
      {
        name: "Thailand",
        price: "₹15,838",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE4MDA5NTQwMDAyMzQ2MDM4ODE4MzU5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Malaysia",
        price: "₹28,538",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA4OTQ3MTMwODg5ODkyNTc4MTI1MDAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Indonesia",
        price: "₹19,538",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjIyNTM2ODMzNTMxODU2NTM2ODY1MjM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Vietnam",
        price: "₹17,500",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ1OTUwNDA0NDc3MTE5NDQ1ODAwNzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Singapore",
        price: "₹81,404",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE3MDM1OTcwMjQ5Mjc2Mzk0ODQ0MDU1MTc1NzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Bhutan",
        price: "₹31,555",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODc3ODY0NDI1NDgzMzU3OTA2MzQxNTUyNzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Taiwan",
        price: "₹13,555",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMzODY1ODg5MTIwMTAxOTI4NzEwOTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Oman",
        price: "₹26,479",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjM2MTMyMzE2MTk1OTY0ODEzMjMyNDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Jordan",
        price: "₹30,852",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTg0Nzc2ODI5NjcxODU5NzQxMjEwOTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      {
        name: "Iraq",
        price: "₹3,860",
        image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE2NDk5NTA5MjI5NjYwMDM0MTc5Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19"
      },
      
  
    ]
export default Country2