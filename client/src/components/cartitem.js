import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './style.css'

function CartItem(props) {

    const handleAddEvent = () => {
        props.addAnother(props.item)
    }

    const handleRemoveEvent = () => {
        props.removeOne(props.item)
    }
    const image = {
        width: '70px',
        height: '50px',
        paddingRight:'10px'
        //left:'0'
       // borderRadius: '12px'    
      }
   
    
    return (
       
            <div className="li">
            <img style={image} src={props.item.image.imageUrl} />
         
                
            
             
            <svg onClick={handleAddEvent} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path fill-rule="nonzero" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
              <span style={{padding:'10px',fontWeight:'bold'}}>{props.item.inCart}</span>
              <svg onClick={handleRemoveEvent} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
</svg>
               
            </div>
       
    )
}

export default CartItem