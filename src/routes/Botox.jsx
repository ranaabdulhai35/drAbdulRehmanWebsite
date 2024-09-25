import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import BotoxHero from '../components/BotoxHero'
import Footer from '../components/footer'
import Botoxcards from '../components/Botoxcards'
import BotoxOvrlappingImgCompo from '../components/BotoxOvrlappingImgCompo'
import BotoxBeforeAndAfterCompo from '../components/BotoxBeforeAndAfterCompo'
import botoxhero1 from '../assets/botoxhero1.png'
import botoxhero2 from '../assets/botoxHero2.png'
import botoxhero3 from '../assets/botoxhero3.png'
import CustomHero from '../components/CustomHero'
import StrokeVitimans from '../components/StrokeVitimans'
import SearchBar from '../components/SearchBar'
import WhatsAppFloatingIcon from '../components/WhatsAppFloatingIcon'
export class Botox extends Component {
  render() {
    return (
      <div className='font-poppins'>  
       
          
             
          <Navbar style='pb-6' />
          <WhatsAppFloatingIcon phoneNumber={'03244574564'} message={`I there I have visited your website I'm interested in getting more information about it`} />
          <BotoxHero/>
          <CustomHero  invert={false} img={botoxhero1} heading='Botox for Spasticity After Stroke' button='learn more' paragraph='Spasticity is a condition where the muscles become stiff due to prolonged contraction or spasm after neurological injuries like stroke. Patients may feel like spasticity is a problem with the muscles themselves, but the problem actually stems from miscommunication between the brain and the muscles.'  />
          <CustomHero  invert={true} img={botoxhero2}  button={'Learn More'} heading='Epidemiology of upper limb PSS in the RACS' paragraph='Role of botulinum toxin in the management of hand ulceration due to post-stroke spasticity among aged care residents'  />


          <dir className='p-6 m-0' >
          {/* <Botoxcards/>  */}

          <BotoxOvrlappingImgCompo/>
          <BotoxBeforeAndAfterCompo/>
          <CustomHero img={botoxhero3} invert={false}  button='Learn More' heading="We provide 'Gold standard' ultrasound guided Botox treatments for people with spasticity"
          paragraph="We Clinically Apply Ultrasound-Guided BoNT-A Injection Technology for Muscle Spasticity in Stroke Patients"
          />
          <StrokeVitimans/>
          <SearchBar/>
          </dir>
          <Footer/> 
      </div>
    )
  }
}

export default Botox