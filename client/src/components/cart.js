import React, { useState, useEffect } from 'react'
//import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
//import { withRouter } from 'react-router-dom';
import CartItem from './cartitem'
import './cart.css'





function Cart(props) {
  //  console.log("items length = ", props.items.length)
  //  console.log("props.items.reduce((a, b) = ",)

    const [open, setOpen] = useState(true);
    console.log("Cart rendered, open =", open)
   
    useEffect(() => {
        
        // setTimeout (() => open?setOpen(false):null, 
        // 5000)
         
        })
   
    

    const count = props.items.reduce((a, b) => {
      //  console.log("a = ", a)
        return a + b.inCart
    }, 0)
    const style = {
        width: "3em",
        height: "3em",
        right: '0',
        paddingBottom: '10px'
    }
    const addAnother = (item) => {
        props.cartAddRemoveItem(item, 1)
    }
    const removeOne = (item) => {
        props.cartAddRemoveItem(item, -1)
    }
   // console.log("Cart rendered, open = ",{open})
    let sum = parseFloat(0)
    const cartComponents = props.items.map(item => {
        sum += parseFloat(item.price.value*item.inCart)
        return <CartItem key={item.itemId} item={item} addAnother={addAnother} removeOne={removeOne} />
    })
    sum=parseFloat(sum).toFixed(2)
    
    const chnageCollapse=()=>{
        setOpen(!open)
    }
//style={{ boxShadow: ' -3px 5px 10px 5px #888888', display: 'inline-block' }}
    return (
        <div>
            <div onClick={chnageCollapse} style={{ userSelect: 'none', cursor: 'pointer', textAlign: 'right' }}    ariaControls="cart">
                <svg style={style} viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="discrete" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <span style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', width: '25px', height: '25px', borderRadius: '50%', backgroundColor: 'red', margin: '-5px 0 0 -15px', display: 'inline-block' }}>
                    {count}
                </span>
            </div>

            <Collapse in={open}>
            <div id="cart" >
                    {cartComponents}
                    <div style={{display:count>0?'block':'none', fontWeight: 'bold', fontSize: '20px', textAlign: 'center', background: '#F5AF02', width: 'inherit' }}>{sum}
                    <div className="trash" onClick={()=>props.emptyCart()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
      </svg></div></div>
                    </div>
                   
            </Collapse>
           
           
                



        </div>
    )

}

export default Cart