import CreateIcon from './CreateIcon';
import './Empty.css'
import myImg from './Images/safe.b9aa346a.png'
import React from 'react';

function Empty(props) {
    return ( <div className="emptyParent">
        <div className='CompImage'><img src={myImg} width={"100%"}></img>
        </div>
  <div> <CreateIcon safeId={props.safeId} handleAdd={props.handleAdd}/></div>
    
    
    
    </div> );
}

export default Empty;