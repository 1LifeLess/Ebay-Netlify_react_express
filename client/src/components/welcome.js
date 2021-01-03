import React,{useState} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import App from '../App.js'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
   // Switch,
   // Route,
    Link
  } from "react-router-dom";

export default function Welcome() {
    const [app, setApp] = useState(false);

    const handleChange=()=>{
        setApp(true)
    }
    return (
        <div>
            
           
<Modal.Dialog style={{display:app?'none':'block'}}>
  <Modal.Header>
    <Modal.Title>Welcome</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p> This project use Ebay API service,<br />
    According to Ebay policy and for security resons, you will have to login to Ebay, <br/>
   Please copy the following credentional or use your own if you already have an Ebay account</p>
   UserName: <span style={{fontWeight:'bold'}}>reactappebay@gmail.com</span><br />
 password:   <span style={{fontWeight:'bold'}}>A!234567</span>

  </Modal.Body>

  <Modal.Footer>
    {/* <Button variant="secondary">Close</Button> */}
    <Button onClick={handleChange} variant="primary">Continue</Button>
  </Modal.Footer>
</Modal.Dialog>
{app&& <App/>}
</div>

    )
}