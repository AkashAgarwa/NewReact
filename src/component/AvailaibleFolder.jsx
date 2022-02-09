
import Button from './Button';
import SecretForm from './SecretForm';
import React from 'react';
import Folder from './Folder';
import './AvailaibleFolder.css'
import { useSelector } from 'react-redux';
function AvailaibleFolder(props) {
const data=useSelector(state=>state.IS).folder;
const listItems = data.map((data1,index) =><li  key={index}>
  <Folder folderName={data1.name} folderId={data.id}/>
</li>
);
const validateSafeForm = () => {
  if(Object.keys(data).length===0)
  return true;
  return false;
};
  
return (  <>
    <div className='AvaecretMainTab'>
    <div className="folderList">
    <ul  style={{listStyle: "none" ,padding:"0px"}}>
        {listItems}
    </ul>
</div>
<div className='AvailableButton'><Button label={"+Add"} 
  onClick={props.setCreate} disabled={validateSafeForm()}/></div>
{props.creat? <SecretForm handleClose={props.handleClose} />:null}
</div></> );
}

export default AvailaibleFolder