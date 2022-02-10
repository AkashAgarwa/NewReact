
import React, { useState } from 'react';

// import {Interval, DateTime } from 'luxon';
import img from '../../Images/safe-icon.69ebc33f.png'
import './SafeCard.css'
import edit from '../../Images/download.png'
import del from '../../Images/delete.png'
import SafesForm from '../SafeForm/SafesForm';
import { useDispatch, useSelector } from 'react-redux';
import {deleteSafe,selectState} from '../../../Action';

function SafeCard(props) {
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
    const CurrDate=new Date();
    var Difference_In_Time = CurrDate.getTime() - dataItem.date.getTime();
    
var Difference_In_Seconds = Difference_In_Time / (1000);
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
let diffrenceInTime;
if(Difference_In_Days>730)
{
  diffrenceInTime='a few year ago'
}
else if(Difference_In_Days>364)
{
  diffrenceInTime='a year ago'
}
else if(Difference_In_Days>60)
{
  diffrenceInTime='a few months ago'
}
else if(Difference_In_Days>30)
{
  diffrenceInTime='a month ago'
}
else if(Difference_In_Days>2)
{
  diffrenceInTime='a few days ago'
}
else if(Difference_In_Days>1)
{
  diffrenceInTime='a day ago'
}
else if(Difference_In_Seconds >= 7200)
{
  diffrenceInTime='a few hours ago'
}
else if(Difference_In_Seconds >= 3660)
{
  diffrenceInTime='an hours ago'
}
else if(Difference_In_Seconds >= 120)
{
  diffrenceInTime='a few minutes ago'
}
else if(Difference_In_Seconds >= 60)
{
  diffrenceInTime='a minute ago'
}
else
{
  diffrenceInTime='a few seconds ago'
}

  return ( <>
  
          <div className={SelectedState.safeId===dataItem.safeId?"safeCard active":'safeCard'} onMouseDown={e=>{dispatch(selectState(dataItem))}}>
           <div className='cardBox'>
           <div className="CardImgbox"><img src={img} alt="safeImage" height={"100%"}></img></div>
              <div className='SafeName'>
                  <span className='safeNameSpan' title={dataItem.safeName}>{dataItem.safeName}</span>
                  <span className='timeOfCreation'>{`Last Updated : ${diffrenceInTime}`}</span>
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

export default SafeCard;