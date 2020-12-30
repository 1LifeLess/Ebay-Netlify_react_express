import React,{useState} from 'react'
import ItemModal from './itemModal'
import './style.css'

//import Button from 'react-bootstrap/Button'

function GetItem(props) {
const  {item,changeModalDisplay,cartAddRemoveItem,getImageDimentions,itemsInPage}=props
  const [modalDisplay, setModalDisplay] = useState(false);
  console.log("GetItem rendered")
 // console.log("GetItem item = ", item)
  const image = {
    width: '227px',
    height: '227px',
    borderRadius: '12px'    
  }
const shadow = {
  width: '227px',
  height: '227px',
  background: '#000',
  borderRadius: '12px',
  opacity: '0.05',
  position: 'absolute',
  zIndex: '1',
  cursor: 'pointer',
  display: 'inline-block',
}



//console.log("props  =",props)
//console.log("props.item  =",props.item)
//cartAddRemoveItem(item,1)
//const nitem={'a':'b'}

  return(
    
  <div style={{display: 'inline-block',  padding: '25px', textAlign:'center', border: '0.2px solid #e5e5e5'}}>
    {/* <h1>{title} </h1><br /> */}
    <div style={shadow} onClick={()=>setModalDisplay(true)}></div>
   <img className="itemsImg" alt="item" itemsInPage={itemsInPage} style={image} id={item.itemId} src={item.image.imageUrl} onLoad={getImageDimentions} /> <br />
   <div title={item.title} className="text" style={{width:'227px'}}>{item.title}</div>
   <span style={{fontWeight:'bold',lineHeight:'30px'}}>Price: {item.price.value}</span><br />
    <button onClick={()=>cartAddRemoveItem(item,1)} className="btn btn-warning">Add to cart  </button> 
     <ItemModal key={item.itemId} closeModal={()=>setModalDisplay(false)} modalDisplay={modalDisplay} item={item}/>
     </div>
 //<div>{title}</div>
//  //<span style={{display: item.inCart>0 ? 'inline-block' : 'none' }} ><svg   width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2 text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
//   </svg>{item.inCart}</span>
  )
}

export default GetItem
