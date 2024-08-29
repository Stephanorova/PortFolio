import './experiance.css'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import {Typography} from "@mui/material"
import ExpandMoreIcons from "@mui/icons-material/ExpandMore"


const Experiance = () => {
  return (
    <div className='experiance' >
        <h5>Me Compétance</h5>

      <Accordion className='expa' defaultExpanded>
        <AccordionSummary   expandIcon={<ExpandMoreIcons style={{color:"white"}}/> }>
          <Typography  >
            Front - end
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <span>Reactjs, Bootstrap, css, html5, Materiel ui, Chakra ui, Redux, TailwindCSS</span>
        </AccordionDetails>
      </Accordion>

      <Accordion className='expa' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons style={{color:"white"}}/>}>
            <span >Back-end</span>
        </AccordionSummary>
        <AccordionDetails>
        <span>Nodejs, Expessjs</span>
        </AccordionDetails>
      </Accordion>

      <Accordion className='expa' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons style={{color:"white"}}/>}>
            <span>Language de programmation</span>
        </AccordionSummary>
        <AccordionDetails>
        <span>JavaScript , PHP</span>
        </AccordionDetails>
      </Accordion>

      <Accordion className='expa' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons style={{color:"white"}}/>}>
        <span>Outils</span>
        </AccordionSummary>
        <AccordionDetails>
        <span>Git , GitHub, APIs</span>
        </AccordionDetails>
      </Accordion>
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons style={{color:"white"}}/>}>
        <span>Base de donné</span>
        </AccordionSummary>
        <AccordionDetails>
        <span> MongoDb, Mysql, PowerBI, Access</span>
        </AccordionDetails>
      </Accordion>
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons style={{color:"white"}}/>}>
        <span>Conception</span>
        </AccordionSummary>
        <AccordionDetails>
        <span>UML, MERISE</span>
        </AccordionDetails>
      </Accordion>
      <Accordion className='expa' defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons style={{color:"white"}}/>}>
        <span>Autre</span>
        </AccordionSummary>
        <AccordionDetails>
        <span>Figma, VBA</span>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Experiance