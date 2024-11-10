import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const destinationsData = [
    {
      name: "Europe",
      subtitle: "Diverse Europe",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDEwMjAzNjUxNTkzNDQ2NzMxNTY3MzgyODEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19", 
    },
    {
      name: "Asia",
      subtitle: "Diverse Asia ",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA2MDgzODY1NzY3NDc4OTQyODcxMDkzNzUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19",
    },
    {
      name: "Oceania",
      subtitle: "Diverse Pacific",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg0NzQ0NjgwODc0NTA2MjM1MTIyNjgwNjY0MDYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19",
    },
    {
      name: "North America",
      subtitle: "Adventure's Paradise",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA5MDc5NjkyMDExNTk0NzcyMzM4ODY3MTkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19",
    },
    {
      name: "Caribbean",
      subtitle: "Tropical Paradise",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDExOTcyNjU1NzAwOTIyMDEyMzI5MTAxNTYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19",
    },
    {
      name: "Africa",
      subtitle: "Cradle of Diverse Wonders",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA1MjQ0NTIzODQxODU3OTEwMTU2MjUwMDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19"
    },
    {
      name: "South America",
      subtitle: "Diverse Continent",
      image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzE1NDc1NDU1NzMyMzQ1NTgxMDU0Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
    },
  ];
  
   export const Plan = () => {
    const settings={
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false
    };
    return (
      <div className='bg-gray-100 py-10'>
        <h2 className='text-3xl font-bold  mb-6 ml-10'>Plan your trip anywhere in the world</h2>
        <div className='container mx-auto px-4 w-100 h-100'>
          <Slider {...settings}>
            {destinationsData.map((destination,index)=>(
              <div key={index}className='p-2'>
                <div className='relative rounded-lg overflow-hidden shadow-lg '>
                  <img src={destination.image}alt={destination.title}className='w=[900px] h-[900px] object-cover'/>
                  <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                    <h1 className='text-white text-5xl font-bold'>{destination.name}</h1>
                    <h3 className='text-white text-xl font-semibold'>{destination.title}</h3>
                    <p className='mt-10  text-2xl text-gray-200'>{destination.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
        </div>
      </div>
    )
   }