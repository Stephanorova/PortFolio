import './accueil.css'
import GithubIcons from "@mui/icons-material/GitHub"
import LinkedInIcons from "@mui/icons-material/LinkedIn"
import MailIcons from "@mui/icons-material/Mail"
import FacebookIcons from "@mui/icons-material/Facebook"
import rovaniaina from "./Stephano cv.pdf"
import './animation.scss'
import { useState } from 'react'
import Footer from './Footer'


const Accueile = () => {

const[calsList,setClalist] = useState('animationText')
const Nom = ['JE',"", "M'"," " ,'A','P','P','E','LL','E',' ','R','A','K','O','T','O','Z','A','N','D','R','Y']
const Prenom = ['R','o','v','a','n','i','a','i','n','a','  ','S','t','e','p','h','a','n','o']



  return (

    <div className='accueil'>
        <div className="titre">
        <span className='bonjour'>Bonjour,</span>   
           <div className="nom"> 
             {
              Nom.map((char)=>(
                <h3 className={`${calsList} _14`}>{char}</h3>
              ))
             }
             </div>
             <div className="nom1">
             {
              Prenom.map((char)=>(
                <h4 className={`${calsList} _15`}>{char}</h4>
              ))
             }
               </div>
             
            <div className="patien">
            <span >Je suis développeur passionner dans le language de programmation javaScript, notament dans les framwork nodejs, Expressjs, Reactjs et d'autre outille
              qui les entoures
            </span>
              <a href={rovaniaina} download >
              <label className="download">Télécharger CV</label>
              </a>
            </div>
            
        </div>
        
        <div className='reseauxsocial' >
            <a href="https://github.com/stephanorakotozandry/StephanoPorfolio" target='_blank' rel='noopener noreferrer'>
           <GithubIcons  style={{color:"white", fontSize:"18px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/rovaniana-rakotozandry-5336612a1/" target='_blank' rel='noopener noreferrer' style={{color:"white"}}  >
            <LinkedInIcons style={{color:"white", fontSize:"18px"}} />
            </a>
            <a href="https://mail.google.com/" target='_blank' rel='noopener noreferrer' style={{color:"white"}} >
            <MailIcons style={{color:"white", fontSize:"18px"}} />
            </a>
            <a href="https://www.facebook.com/Niaina_Stephano" target='_blank' rel='noopener noreferrer' style={{color:"white ",}}>
             <FacebookIcons style={{color:"white", fontSize:"18px"}} />
             </a>
            <div className='lines'/>
            </div>
        <div className="lefte2">
        <div className="image">
          <div className="imageBox">
            <div className="cercle1">
            <img src="/image/logo3.png" alt="icon"  style={{width: "40px", height:"40px",borderRadius:"100%"}}/>
            </div>
            <div className="cercle2">
            <img src="/image/logo2.png" alt="icon"  style={{width: "40px", height:"40px",borderRadius:"100%"}}/>
            </div>
            <div className="cercle3">
              <img src="/image/rova.jpg" style={{width: "50px", height:"50px", borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}/>
            </div>
            <div className="cercle4">
            <img src="/image/images.png" alt="icon"  style={{width: "40px", height:"40px",borderRadius:"100%"}}/>
            </div>
            <div className="cercle5">
            <img src="/image/logo.png" alt="icon"  style={{width: "40px", height:"40px",borderRadius:"100%"}}/>
            </div>
          </div>
        </div>
        <div className="leflfte">
        <div className='lettre'>
              <span>p</span>
              <span>o</span>
              <span>r</span>
              <span>t</span>
              <span>f</span>
              <span>o</span>
              <span>l</span>
              <span>i</span>
              <span>o</span>
            </div>
            <div className='line'/>
        </div>
        </div>  
    </div>
  )
}

export default Accueile