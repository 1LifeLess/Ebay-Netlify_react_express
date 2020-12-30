import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './itemModal.css'
//why class padding on img doesn't work but only direct style
//how to set HOVER style to tag elemnt which is only inside css class
const MODAL_STYLE = {
  position: 'fixed',
  height: '600px',
  top: '30%',
  left: '50%',
  backgroundColor: '#FFF',
  transform: 'translate(-50%,-50%)',
  zIndex: '1000'
}
const OVERLAY_STYLE = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: '1000'
}
const IMAGE_STYLE = {
  width: ''
}
const SLIDSHOW_STYLE = {

}

export default function ItemModal({ item, closeModal, modalDisplay }) {
  const { title, additionalImages, condition, itemLocation, price, seller } = item
  console.log("item = ", item)
  const [currentImg, setCurrentImg] = useState(0);
  const [left, setLeft] = useState(0)
  const[rightArrow,setRarrow]=useState(true)
  const[leftArrow,setLarrow]=useState(false)
  if (!modalDisplay) return null
  //console.log("ItemModal item = ",item)
  //console.log("ItemModal rendered " ,modalDisplay)


  const changeCurrImg = (index) => {
    setCurrentImg(index)
  }

  //
  const imgArr = additionalImages.map((imgItem, index) => {
    return (
      <img key={item.itemId + '_' + index} className="thumbnails" style={{ flex: '1', padding: '5px', width:'120px',height: '120px', boxSizing: 'border-box', borderRadius: '4%' }} src={imgItem.imageUrl} onClick={() => changeCurrImg(index)} />
    )
  })

  const handleClose = () => {
    closeModal()
  }

  const slideAction = (direction) => {
    console.log('direction from btn = ' ,direction)
   const total=additionalImages.length
    const current = left/120
    console.log("total = ",total," current = ",current)
  if(direction<0&&total+(current+direction)<4){
    direction=(total+(current+direction))*-1 
    setLeft((current+direction)*120)
    setRarrow(false)
  }
 else if(direction>0&&current>-4){
   direction=-1*current
   setLeft((current+direction)*120)
   setLarrow(false)
  }
 else{ 
   setLeft((current+direction)*120)
   setLarrow(true)
   setRarrow(true)
 }

 console.log("direction res = ", direction*120, "left = ",left)
 

  }
  const dots = additionalImages.map((item, index) => {
    const tmp = index == currentImg ? { backgroundColor: '#34d5eb' } : {}
    return <div key={index} className="dot" style={tmp}></div>
  })
  console.log("LEFT = ",left)
  return ReactDom.createPortal(
    <div style={OVERLAY_STYLE}>
      <Modal.Dialog style={MODAL_STYLE} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ margin: '0 auto', position: 'relative', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <img className='mainImage' src={additionalImages[currentImg].imageUrl} /></div>
          <div className="slideShow"><div className="imgWrapper" style={{ left: ''+left+'px' }}>

            {imgArr}

          </div></div>
          <div className="swapContainer" style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
            <div style={!leftArrow||left==0?{display:'none'}:{}} className="arrow" onClick={()=>slideAction(4)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg></div>
            {dots}
            <div style={!rightArrow||left==additionalImages.length*-120?{display:'none'}:{}} className="arrow" onClick={()=>slideAction(-4)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg></div>
          </div>
          <span>contidion: {condition}</span><br />
          <span>seller: {seller.username}  {seller.feedbackPercentage}%<svg style={{color:'#c5c538'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span><br />
<span> shipping from: {itemLocation.country}</span><br />
        </Modal.Body>

        <Modal.Footer>
          
<Button  variant="secondary" onClick={handleClose}>Close</Button>
                  </Modal.Footer>
                  
      </Modal.Dialog>
    </div>
    ,
    //<div style={MODAL_STYLE}>modal</div>,
    document.getElementById('modalPortal')
  )
}
