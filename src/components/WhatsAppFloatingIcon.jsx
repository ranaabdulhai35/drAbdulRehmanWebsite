import React, { useState, useEffect } from 'react';
import wh from '../assets/wh.png'
const WhatsAppFloatingIcon = ({ phoneNumber, message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop   
 > 100); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const   
 handleButtonClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-floating-icon"   
 style={{ zIndex: 999, position: 'fixed', bottom: '20px', right: '20px', display: isVisible ? 'block' : 'none' }}>
      <button onClick={handleButtonClick}>
        <img className='xl:w-[100px] rounded-3xl max-md:rounded-lg md:w-[80px] max-sm:w-[50px] sm:w-[50px]' src={wh} alt='whatsapp' />
      </button>
    </div>
  );
};
// https://www.freeiconspng.com/downloadimg/3930
export default WhatsAppFloatingIcon;