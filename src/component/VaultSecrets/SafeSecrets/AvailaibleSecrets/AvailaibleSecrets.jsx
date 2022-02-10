import React from 'react';
import SecretCard from '../../SecretCard/SecretCard'
import './AvailaibleSecrets.css'
import { useSelector } from 'react-redux';
function AvailaibleSecrets(props) {
const data=useSelector(state=>state.IS).folder;
const listItems = data.map((data1,index) =><li  key={index}>
  <SecretCard folderName={data1.name} folderId={data1.id}/>
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

export default AvailaibleSecrets