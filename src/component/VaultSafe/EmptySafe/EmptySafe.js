import CreateIcon from '../CreateIcon/CreateIcon';
import './EmptySafe.css'
import myImg from '../../Images/safe.b9aa346a.png'
import React from 'react';

function Empty(props) {
    return ( <div className="emptyParent">
        <div className='CompImage'><img alt="" src={myImg} width={"100%"}></img>
        </div>
  <div> <CreateIcon setCreate={props.setCreate}/></div>
</div> );
}

export default Empty;