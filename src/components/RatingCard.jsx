
import Star from '../assets/star.png'
import Star2 from '../assets/star2.png'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
function RatingCard({ avatar, name, title, review, rating }) {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
    return (
      <div 
       data-aos='fade-up'
                  data-aos-anchor-placement="center-bottom"
      className="min-w-[327px] RTCard h-[244px] max-sm:max-w-[300px] px-[35px] py-[30px] sm:max-w-[330px] min-h-[244px] bg-white relative text-black">
        <div className="flex flex-col justify-between rounded-md   ">
  
        <div 
        
         data-aos='fade-down'
                  data-aos-anchor-placement="center-bottom"
        
        className='flex   '>
  {Array(Math.floor(rating)).fill(0).map((curr ,i) => (
    <img src={Star} alt="star" key={i}/>
  ))}
  
  {
    Array(5 - Math.floor(rating)).fill(0).map((curr , i) => (
      <img src={Star2} alt="empty star" key={i} />
      ))}
  
</div>
          <div className="flex items-center">
            {/* Your star icons here */}
          
          </div>
  
          <p className="  font-Montserrat text-[#737373] text-sm ">
            {review}
          </p>
          
            <div className='w-10 h-10 absolute bottom-4 left-[35px]  '>
                  <div className=' '>
                    <img src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full
                    " />
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default RatingCard