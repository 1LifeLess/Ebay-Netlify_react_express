import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import App from '../App'
// import {
//     BrowserRouter as Router,
//    // Switch,
//    Route,
    
//   } from "react-router-dom";

export default function Welcome() {
    const [app, setApp] = useState(false);

    const handleChange=()=>{
        setApp(true)
    }
    if(window.location.href.indexOf('code=') >= 0) return <App />
    else
    return(
    <Modal.Dialog style={{display:app?'none':'block'}}>
  <Modal.Header>
    <Modal.Title>Welcome</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p> This project use Ebay API service,<br />
    According to Ebay policy and for security reasons, you will have to login to Ebay, <br/>
   Please copy the following login or use your own if you already have an Ebay account</p>
   UserName: <span style={{fontWeight:'bold'}}>reactappebay@gmail.com</span><br />
 password:   <span style={{fontWeight:'bold'}}>A!234567</span>

  </Modal.Body>

  <Modal.Footer>
    {/* <Button variant="secondary">Close</Button> */}
    <Button onClick={handleChange} href='https://auth.ebay.com/oauth2/authorize?client_id=tomersha-store-PRD-273605ce9-ba8ef486&response_type=code&redirect_uri=tomer_shani-tomersha-store--efihmyvu&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/commerce.identity.readonly' variant="primary">Continue</Button>
  </Modal.Footer>
</Modal.Dialog>

    )

 
}
