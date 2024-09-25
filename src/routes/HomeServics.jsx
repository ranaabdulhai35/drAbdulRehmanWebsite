import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'
import LocatiionHomeHealth from '../components/LocatiionHomeHealth'
import LocationServicesWeProvideCards from '../components/LocationServicesWeProvideCards'
import WhatsAppFloatingIcon from '../components/WhatsAppFloatingIcon'
function Location() {
  return (
  <>
      <Navbar/>
      <WhatsAppFloatingIcon phoneNumber={'03244574564'} message={`I there I have visited your website I'm interested in getting more information about it`} />
  <div className='p-6' >
        <LocatiionHomeHealth/>
        <LocationServicesWeProvideCards/>         

      <SearchBar/>
  </div>
  <Footer/>
  </>
  )
}

export default Location