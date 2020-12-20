import React from 'react';

const ItemsPerPage = (props) => {
 
console.log("ItemsPerPage rendered")
const updateItems=(e)=>{
  //  console.log("E",e)
  //  console.log("e.target.value",e.target.value)
props.updateItemsPerPage(e.target.value)
}
  return (
      <div style={{position: 'relative',verticalAlign:'sub',display:'inherit',paddingRight:'50px'}}>items:<br />
    <select onChange={updateItems} value={props.itemsPerPage}>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    </select>
    </div>
  )
}

export default ItemsPerPage;