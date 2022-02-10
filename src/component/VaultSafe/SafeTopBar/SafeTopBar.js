import React from 'react';
import './SafeTopBar.css'
function SafeSearch(props) {
       return (  <>
    
    <div className="topBarAvailaibleSafe">
<span>All Safes{` (${props.numberOfData})`}</span>
<div className='searchGroup'>
  <input type="text" placeholder='Search' value={props.searchTerm} onChange={props.handleOnChange}/>
</div>
    </div>
    </>);
}

export default SafeSearch;