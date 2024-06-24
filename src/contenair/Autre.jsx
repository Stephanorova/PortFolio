import './autre.css'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import {Typography} from "@mui/material"
import ExpandMoreIcons from "@mui/icons-material/ExpandMore"
import rovaniaina from "./Stephano.pdf"

const Autres = () => {
  return (
    <div className='autre' >
      <Accordion className='autant' defaultExpanded>
        <AccordionSummary   expandIcon={<ExpandMoreIcons style={{color:"white"}}/> }>
          <Typography  >
           <h5>A propos de moi</h5> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flexivite">
            <span> 
              Développeur fullstack javascript, j'ai appris à coder dans divers languages de programmation informoatique ( javascript, PHP ...). 
              Polyvalent, je maitrise les différentes étapes tecthniques de la création d' un site ou d' une application web, de la compréhension des besoins utilisateurs,
              au développement frontend et backend en passant par la maintenance.   
            </span>
            <img src="/image/ff.jpg" alt="ff"  className='photomoi'/>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Autres