import './contact.css'
import NaveBare from '../naveBare/naveBare'
import Footer from '../contenair/Footer'
import ContactFile from '../Component/ContactFile'
import Experiance from '../contenair/Experiance'

const Experience = () => {
  return (
    <div>
        <NaveBare/>
        <div className='file'>
        <Experiance/>
        </div>
        <Footer/>
    </div>
  )
}

export default Experience