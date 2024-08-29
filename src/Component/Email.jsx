import'./email.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useHistory } from 'react-router-dom';
import {toast} from "react-toastify"



const Email = () => {
  const [saisir,setSaisire] = useState({
     nom: '',
     email : '',
     message: '',
  })

  const form = useRef();
  const history = useHistory()


  const sendEmail = (e)=>{
    e.preventDefault()
    const send =  emailjs.sendForm('service_bs22p5j','template_rxb6ttx' ,form.current,'goflVDn8UP0myT3qG')
    .then((result) => {
      console.log(result.text);
      window.location.reload(true)
    })
    .catch(error =>console.log(error.text))
   
      if (send) {
        history.push("/")
        toast.success("message bien envoyer",{
        position:"bottom-left"
      })
      } else{
        toast.error("erreur de connexion",{
          position:"bottom-left"
      })
    }
    
 
    
}




  return (
    <div className='email'>
    <form ref={form} onSubmit={sendEmail} className='form'>
        <ul>
              <li>
            <input type="text" name='user_name' onChange={(e)=>setSaisire({...saisir, nom:e.target.value})} placeholder='votre nom' />
            </li>
            <li>  
            <input type="email" name='user_email'  onChange={(e)=>setSaisire({...saisir, email:e.target.value})} placeholder='votre email' />    
            </li>  
            <li>
            <textarea type="text" name='message' onChange={(e)=>setSaisire({...saisir, message:e.target.value})} placeholder='message' />  
            </li>
            <li>
            <input type="submit" value='Envoyer' className='button'/>
            </li>
        </ul>
    </form>  
    </div>
  )
}

export default Email