
import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const cardData = [
  {
    id: 1,
    img: 'https://tailwindcss.com/img/jonathan.jpg',
    title: 'How to be effective at working remotely?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    category: 'ARTICLE',
    subcategory: 'PROCESS',
  },
  {
    id: 2,
    img: 'https://tailwindcss.com/img/sarah.jpg',
    title: 'Top 5 Tips for Successful Content Marketing',
    description:
      'Content marketing is a powerful tool for businesses to attract and engage customers. Here are 5 tips to help you succeed.',
    category: 'MARKETING',
    subcategory: 'STRATEGY',
  },
  {
    id: 3,
    img: 'https://tailwindcss.com/img/william.jpg',
    title: 'The Importance of User Experience (UX) Design',
    description:
      'UX design focuses on creating a positive experience for users interacting with a product or service.',
    category: 'DESIGN',
    subcategory: 'FUNDAMENTALS',
  },
  {
    id: 4,
    img: 'https://tailwindcss.com/img/emily.jpg',
    title: 'Building a Strong Personal Brand Online',
    description:
      'In today\'s digital age, having a strong personal brand online can be essential for career success.',
    category: 'CAREER',
    subcategory: 'DEVELOPMENT',
  },
  {
    id: 5,
    img: 'https://tailwindcss.com/img/sophia.jpg',
    title: 'Mastering the Art of Social Media Engagement',
    description:
      'Social media engagement is key to building a following and achieving your marketing goals.',
    category: 'SOCIAL MEDIA',
    subcategory: 'ENGAGEMENT',
  },
  {
    id: 6,
    img: 'https://tailwindcss.com/img/william.jpg', // Duplicate image for demonstration
    title: 'The Power of Data-Driven Decision Making',
    description:
      'Data-driven decision making involves using data to inform your choices and strategies.',
    category: 'BUSINESS',
    subcategory: 'INSIGHTS',
  },
];

function Card3() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
     <div className='w-[100%] items-center justify-center flex' >

    
      <div className="grid xl:grid-cols-3 gap-x-[22px] gap-y-[24px]  md:grid-cols-2  justify-items-center ">
        {cardData.map((card) => (
          <div
            key={card.id}

            data-aos='fade-right'
        data-aos-anchor-placement="center-bottom"

            className="  h-[412px] font-DMSans w-card relative transition duration-300  max-w-sm rounded-[24px]   overflow-hidden bg-white  shadow-lg"
          >
            <div className="py-8 m-4 px-4">
              <img src={card.img} className="rounded-full h-[80px] w-[80px] mb-8" alt={card.title} />
              <a href="#">
                <h4 className="text-[22px] leading-[22px] mb-3 font-semibold ">{card.title}</h4>
              </a>
              <p className="mb-2  leading-[1.5rem]  text-gray-600">{card.description}</p>

              <div className="flex  flex-col absolute bottom-[50px]  ">
                <span className="text-[#007E85] text-lg font-bold  leading-[18px]  ">{card.category}</span>
                
                <span className="text-gray-500 m-0">{card.subcategory}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    
  );
}

export default Card3;