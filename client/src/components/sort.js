import React from 'react';
import 'bootstrap';
 
const Sort=(props)=> {
  console.log("Sort Rendered")
     
  return <div class="dropdown" style={{display:'inline-block', paddingRight:'15px',paddingLeft:'17px',height:'38px'}}>
  <button style={{height:'inherit'}}  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{cursor:'pointer'}}>
    <div class="dropdown-item" onClick={()=>props.changeSortOrder(0)}>Price low to high</div>
    <div class="dropdown-item" onClick={()=>props.changeSortOrder(1)}>Price high to low</div>

  </div>
</div>
}
 
export default Sort;