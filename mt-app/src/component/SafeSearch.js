import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useState} from 'react';
import {searchitem} from '../Action'
import './SafeSearch.css'
function SafeSearch() {
  
const [searchTerm,setSearchTerm]=useState("");
const data=useSelector(state=>state.safe) 

const dispatch=useDispatch();
    const handleOnChange=(e)=>
    {
      setSearchTerm(e.target.value);
dispatch(searchitem(e.target.value));
    }

       return (  <>
    
    <div className="topBarAvailaibleSafe">
<span>All Safes{`(${data.length})`}</span>
<div className='searchGroup'>
  <input type="text" placeholder='Search' value={searchTerm} onChange={handleOnChange}/>
</div>
    </div>
    </>);
}

export default SafeSearch;