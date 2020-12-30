import React from 'react'
import img from '../files/ebay.jpg'

function Search(props) {
    const userInput = React.useRef(null);
    console.log("props.text = ",props.text)

    //const [invalid, setInvalid] = useState({});

    const handleChange=(e)=>{
        e.preventDefault()
        if(userInput.current.value){
            props.changeText(userInput.current.value)
           
        }
        else document.getElementById("searchBox").style.border = '1px solid #ff0000'
      
        //console.log(" userInput.current.value = ", userInput.current.value)
       
       // props.changeText(document.getElementById("searchBox").innerText)
      // onKeyPress={handleKeypress}
    }
    return <div>
        <img alt="ebay logo" style={{height:'100px'}} src={img}/>
        <nav class="navbar navbar-light bg-light">
            <form class="form-inline" onSubmit={handleChange}>
                <input id="searchBox"  onChange={()=> document.getElementById("searchBox").style.border = ''} onKeyPress={(e)=>e.key === 13?handleChange:null} class="form-control mr-sm-2" type="search"  placeholder="Search"  aria-label="Search" ref={userInput} />
                <button class="btn btn-outline-success my-2 my-sm-0 " disabled={props.authError} type="submit" >Search</button>
                
            </form>
          
        </nav>
        
    </div>
}

export default Search