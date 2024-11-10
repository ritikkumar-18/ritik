import { useState, useRef } from 'react';

export default function Jammuarticle() {
  const [quote, setQuote] = useState(
    "In addition to providing worry-free travel as regards health concerns, The Tarzan Way does a complete surrender to nature along with teaching reasonable self-dependency, isolationist travel aligns nicely with responsible tourism."
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [linePosition, setLinePosition] = useState({ width: 0, left: 0 });
  const logoRefs = useRef([]);

  const quotes = [
    "In addition to providing worry-free travel as regards health concerns, The Tarzan Way does a complete surrender to nature along with teaching reasonable self-dependency, isolationist travel aligns nicely with responsible tourism.",
    "While creating a highly personalized experience, companies need to keep in mind the traveler’s purpose and what a particular location may have to offer, The Tarzan Way is doing a great job for that.",
    "The Tarzan Way wants to revamp the entire traveler experience by making it more streamlined and customer-friendly.",
    "A young team of entrepreneurs taking on the travel industry with The Tarzan Way is a travel & tech-based venture that aims at simplifying travel for its users and does so brilliantly.",
    "The Tarzan Way provides the best information for traveling with live support to travelers to ensure a hassle-free travel experience.",
    "Giving an employer's perspective, Shikhar Chadha, CEO of travel firm The Tarzan Way, said, Initially, WFH was very difficult because we were not familiar with it. Coordinating on phone was challenging but eventually we adapted to working remotely.",
    "Imagine you're a traveler, and you want to visit some place; You might be interested in an exciting road trip, or thrilling treks, maybe a heritage walk and what not. What market has to offer you"
  ];

  const logos = [
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9vdXRsb29rLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwLCJoZWlnaHQiOjE1MCwiZml0IjoiY292ZXIifX19", alt: "Traveller" },
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9pbmRpYW5leHByZXNzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwLCJoZWlnaHQiOjQxLCJmaXQiOiJjb250YWluIn19fQ==", alt: "Indian Express" },
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9waG9jdXN3aXJlLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwLCJoZWlnaHQiOjI5LCJmaXQiOiJjb3ZlciJ9fX0=", alt: "PhocusWire" },
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/media/website/brilliant.png", alt: "Brilliant Read" },
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/media/website/yourstory.png", alt: "YSI Hindi" },
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/media/website/economic-times.jpg", alt: "Economic Times" },
    { src: "https://d31aoa0ehgvjdi.cloudfront.net/media/website/f6s-logo.png", alt: "F6S" }
  ];

  const handleMouseEnter = (index) => {
    const logoElement = logoRefs.current[index];
    if (logoElement) {
      const { offsetLeft, offsetWidth } = logoElement;
      setLinePosition({ width: offsetWidth, left: offsetLeft });
    }
    setQuote(quotes[index]);
    setHoveredIndex(index);
  };

  return (
    <div className="mt-20 h-[80vh] mx-20">
      <h1 className="text-4xl font-bold mb-10">What they say?</h1>
      <div className="flex flex-col items-center py-10">
        {/* Logos */}
        <div className="relative flex justify-between gap-20 mb-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              ref={(el) => (logoRefs.current[index] = el)}
            >
              <img src={logo.src} alt={logo.alt} className="h-11 object-contain cursor-pointer" />
            </div>
          ))}

          {/* Moving Yellow Line */}
          <div
            className="absolute bg-[#FDE047] transition-all duration-300"
            style={{
              width: `${linePosition.width}px`,
              height: '3px',
              transform: `translateX(${linePosition.left}px)`,
              bottom: '-32px',
            }}
          ></div>
        </div>

        {/* Quote Section */}
        <blockquote className="text-center text-3xl font-normal mb-4 px-6 max-w-3xl mx-auto">
          {quote}
        </blockquote>

        {/* Link to Full Article */}
        <a href="https://indianexpress.com/article/lifestyle/destination-of-the-week/travelling-in-the-new-normal-how-pandemic-has-changed-the-rules-of-the-game-7058162/" className="text-black text-lg hover:underline mt-10">
          Full Article
        </a>
      </div>
    </div>
  );
}
