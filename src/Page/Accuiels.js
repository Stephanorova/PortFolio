import React from 'react'
import NaveBare from '../naveBare/naveBare'
import Accueile from '../contenair/Accueil'
import Footer from '../contenair/Footer'

const Accueiles = () => {
  return (
    <div>
         <NaveBare/>
        <div className='files'>
         <Accueile/>
         </div>
    </div>
  )
}

export default Accueiles