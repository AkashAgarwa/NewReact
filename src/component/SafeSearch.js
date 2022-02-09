import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useState} from 'react';
import {searchitem} from '../Action'
import './SafeSearch.css'
function SafeSearch() {
  
const data=useSelector(state=>state.safe);
const [searchTerm,setSearchTerm]=useState("");
let number = data.length;
const dispatch=useDispatch();
    const handleOnChange=(e)=>
    {
      setSearchTerm(e.target.value);
dispatch(searchitem(e.target.value));
      number=data.length? ( data.filter(data1=>data1.safeName.includes(searchTerm))).length:0;
    }

       return (  <>
    
    <div className="topBarAvailaibleSafe">
<span>All Safes{`(${number})`}</span>
<div className='searchGroup'>
  <input type="text" placeholder='Search' value={searchTerm} onChange={handleOnChange}/>
</div>
    </div>
    </>);
}

export default SafeSearch;