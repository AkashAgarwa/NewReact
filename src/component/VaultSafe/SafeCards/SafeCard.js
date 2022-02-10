
import React, { useState } from 'react';

import img from '../../Images/safe-icon.69ebc33f.png'
import './SafeCard.css'
import edit from '../../Images/download.png'
import del from '../../Images/delete.png'
import SafesForm from '../../SafeForm/SafesForm';
import { useDispatch, useSelector } from 'react-redux';
import {deleteSafe,selectState} from '../../../Action';

function Safe(props) {
  const dataItem=props.value;
 
const [creat,setCreat]=useState(0);
const handleClose = () =>{
    setCreat(0)
    }

    const setCreate = ()=> {
        setCreat(1)
    }
    const dispatch=useDispatch();
    let SelectedState=useSelector(state=>state.IS)
    if(SelectedState.length === 0)
    SelectedState={
      safeId:-1
    }
  return ( <>
  
          <div className={SelectedState.safeId===dataItem.safeId?"safeCard active":'safeCard'} onMouseDown={e=>{dispatch(selectState(dataItem))}}>
           <div className='cardBox'>
           <div className="CardImgbox"><img src={img} alt="safeImage" height={"100%"}></img></div>
              <div className='SafeName'>
                  <span title={dataItem.safeName}>{dataItem.safeName}</span>
                  <span className='timeOfCreation'>{`1 day ago`}</span>
              </div>
           </div>
              <div className='edit_delete' >
                  <span  onClick={setCreate}>
                  <img src={edit} alt="edit" height={"50%"}></img>
                  </span>
                  <span className="deleteCardClass"  onClick={e=>{dispatch(deleteSafe(dataItem.safeId));}}>
                  <img src={del} alt="delete" height={"50%"}></img>
                  </span>
                  
        </div>
          </div>
          {creat ?  <SafesForm   handleClose={handleClose} data={dataItem} edit={1}/> : null }
    </> );
}

export default Safe;