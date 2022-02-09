import React, { useState } from 'react';
import './EmptySecret.css';
import img from "./Images/EmptySecret.png"
import Button from './Button';
import SecretForm from './SecretForm';
import { useSelector } from 'react-redux';

function EmptySecret(props) {
    const data=useSelector(state=>state.IS);

const validateSafeForm = () => {
  if(Object.keys(data).length===0)
  return true;
  return false;
};
return ( <>
    <div className='EmptySecretMainTab'>
<div className='ImageBoxSafeSecret'><img src={img} height={"100%"}></img></div>
<div className="secrets__caption"><span>Add a <span className="secrets__caption-highlight">Folder</span> and then you’ll be able to add </span><span><span className="secrets__caption-highlight">Secrets</span> to view them all here</span></div>
<Button label={"+Add"} 
  onClick={props.setCreate}  disabled={validateSafeForm()}/>
{props.creat? <SecretForm handleClose={props.handleClose}/>:null}

    </div>
    </> );
}

export default EmptySecret;