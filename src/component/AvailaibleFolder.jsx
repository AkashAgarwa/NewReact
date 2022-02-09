
import Button from './Button';
import SecretForm from './SecretForm';
import React from 'react';
import Folder from './Folder';
import './AvailaibleFolder.css'
import { useSelector } from 'react-redux';
function AvailaibleFolder(props) {
const data=useSelector(state=>state.IS).folder;
const listItems = data.map((data1,index) =><li  key={index}>
  <Folder folderName={data1.name} folderId={data1.id}/>
</li>
); 
return (  <>
    <div className='AvaecretMainTab'>
    <div className="folderList">
    <ul  style={{listStyle: "none" ,padding:"0px"}}>
        {listItems}
    </ul>
</div>
</div></> );
}

export default AvailaibleFolder