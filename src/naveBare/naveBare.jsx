
import { useHistory } from 'react-router-dom'
import'./naveBare.css'
import { useState } from 'react'
import MenuIcons from "@mui/icons-material/Menu"
import CloseIcons from "@mui/icons-material/Close"


const NaveBare = () => {
 const[mobil,setMobil] = useState(false)

const history = useHistory()

  return (

    <div className='navebare'>
      <div className="logo"><h2>St</h2></div>
      <div className="logo12"></div>
      <div className="logo22"></div>
      <div className="logo32"></div>
      <div className={mobil ? "responsive" : "nonresponsive"}>
       <ul onClick={()=>setMobil(false)}>
       <i className='quiter'><CloseIcons/></i>
        <li onClick={()=>history.push("/")} className='menus'>
              Accueil
            </li>
            <li onClick={()=>history.push("/experience")} className='menus'>
              Compétence
            </li>
            <li onClick={()=>history.push("/education")} className='menus'>
            Education
            </li>
            <li onClick={()=>history.push("/projet")} className='menus'>
              Projet
            </li>
            <li onClick={()=>history.push("/autre")} className='menus'>
              Autre
            </li>
            <li onClick={()=>history.push("/mail")} className='buttoncontacte'>
              Contact
            </li>
          </ul>
       </div>
       <span className='button' onClick={()=>setMobil(!mobil)}>
            {mobil ? "" : <i className='open'><MenuIcons/></i>}
          </span>
    </div>
  )
}

export default NaveBare