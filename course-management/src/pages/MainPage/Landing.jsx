import React from 'react'
import Header from '../../layouts/Header/Header';
import Mainbox from '../../pages/MainPage/Heading/Landing';
import Footer from '../../layouts/Footer/Footer';
import Benefits from '../../pages/MainPage/Benefits/benefits';
import FAQ from '../../pages/MainPage/Faq/faq'

function Landing() {
  return (
    <div>
        <Header/>
        <Mainbox/>
        <Benefits/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Landing
