import React from 'react';
import { useSelector } from 'react-redux';
import './Folder.css'

import del from './Images/delete.png'

import { deleteFolder } from '../Action';
import fol from './Images/FolderImage.png'
function Folder(props) {
const safeId=useSelector(state=>state.IS).safeId;
const folderId=props.folderId;
    return (  
        <div className='folderName'>
            <div className='secretsAvailaible'>
              
                  
<div className='FolderIm'><img src={fol} height={"100%"} ></img></div>
                  <span className='FolderN'>{props.folderName}</span>
              </div>
              <div className='deleteSecrets'onClick={()=>{deleteFolder(safeId,folderId)}} >
                  <img src={del}  height={"50%"}></img>
              </div>
           </div>);
}

export default Folder;