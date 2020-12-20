import React, { useState,useEffect  } from 'react';
import queryString from 'query-string'
import { Redirect } from 'react-router';

function GetKey(props) {
  // Declare a new state variable, which we'll call "count"
  const [tokenRes, setTokenRes] = useState('');
  useEffect(() => {
    //props.onTokenUpdate(JSON.stringify('{key : data}'))
    // console.log("queryString.parse(props.location.search).code = ", queryString.parse(props.location.search).code)
     console.log("GETkeyCalled")
     const mybody={'code': queryString.parse(props.location.search).code}
     console.log("mybody = ",JSON.stringify(mybody))
    fetch(" /.netlify/functions/server/getToken", {
    headers:{
      'Content-Type':'application/json'
    },        
    method: 'POST',
    body: JSON.stringify(mybody)
  }).then(response => {
    console.log("resposne getkey = ", response)
    if(!response.ok) throw new Error('Failed to generate access token, probably code in url is expired: ')
    props.fetchItems()
    })
    .catch((error) => {
      console.log('ERROR getKeyFromCode = ',error);
      props.handleError(error.message,true)
             
     })
    
  });
  //console.log("props = ", props)
  
  return (
   null
  );
}
export default GetKey