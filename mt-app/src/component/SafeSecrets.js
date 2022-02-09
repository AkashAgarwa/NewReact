import './SafeSecrets.css'

import fol from './Images/FolderImage.png'
import { useState } from 'react';
import SecretForm from './SecretForm';
import EmptySecret from './EmptySecret';
import AvailaibleFolder from './AvailaibleFolder';
import { useSelector } from 'react-redux';

import disImg from './Images/folderIcon.png'

function SafeSecrets(props) {
    const data=useSelector(state=>state.IS);
    const validateSafeForm = () => {
        if(Object.keys(data).length===0)
        return 1;
        else
        return 0;
      };
    const number=Object.keys(data).length===0 ? 0: data.folder.length;
    const [creat,setCreat]=useState(0);
    const handleClose = () =>{
        setCreat(0)
        }
  
        const setCreate = ()=> {
            setCreat(1)
        }
    return (  <div className="SafeSectretsMainTab">
    
    <div className="SafeSecretsTopBar">
<div className='SecretBox'>Secrets</div>
    <div className='SecretBox'>Permisson</div>
    
    <div className='folder SecretBox'><span className='FolderImage'> <img src={fol} height={"100%"}  onClick={setCreate}></img>
    </span></div>
    
    {creat? <SecretForm handleClose={handleClose} />:null}
    </div>
    <div className='availaibleFolder'>
    <div className="secrets__count">{`${number} Secrets`}</div>
        {number ? <AvailaibleFolder creat={creat} handleClose={handleClose} setCreate={setCreate}/>: <EmptySecret  creat={creat} handleClose={handleClose} setCreate={setCreate}/>}
    </div>
    </div>);
}

export default SafeSecrets;
