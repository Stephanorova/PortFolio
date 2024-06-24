import './contact.css'
import NaveBare from '../naveBare/naveBare'
import Footer from '../contenair/Footer'
import Autres from '../contenair/Autre'


const Autre = () => {
  return (
    <div>
        <NaveBare/>
        <div className='file'>
        <Autres/>
        </div>
        <Footer/>
    </div>
  )
}

export default Autre