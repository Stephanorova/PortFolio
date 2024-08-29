import { useParams } from 'react-router-dom'
import './contact.css'
import { data } from './Data'
import ReplyOutlinedIcons from "@mui/icons-material/ReplyOutlined"
import { useHistory } from 'react-router-dom'


const ProjectId = () => {

const {id} =  useParams()
const projectid = data[id]

const history = useHistory()

  return (
    <div className="contact">
      
      <div className='dataID'>
        <img src={projectid.image} alt="img" className='image' />
        <span className='nameID'>{projectid.techno}
        <a href={projectid.url} className='url'>{projectid.url}</a>
        </span>
     </div>
    
    <button className='retour' onClick={()=>history.push("/projet")}><ReplyOutlinedIcons/></button>
   
    </div>
  )
}

export default ProjectId