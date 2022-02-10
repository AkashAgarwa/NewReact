import React from 'react';
import './SafeTopBar.css'
function SafeSearch(props) {
let number =props.number;
       return (  <>
    
    <div className="topBarAvailaibleSafe">
<span>All Safes{` (${number})`}</span>
<div className='searchGroup'>
  <input type="text" placeholder='Search' value={props.searchTerm} onChange={props.handleOnChange}/>
</div>
    </div>
    </>);
}

export default SafeSearch;