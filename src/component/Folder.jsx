import React from 'react';
import { useSelector } from 'react-redux';
import './Folder.css'

import del from './Images/delete.png'

// import { deleteFolder } from '../Action';
import fol from './Images/FolderImage.png'
import { useDispatch } from 'react-redux';
function Folder(props) {
const safeId=(useSelector(state=>state.IS)).safeId;
const dispatch=useDispatch();
    return (  
        <div className='folderName' onClick={e=>{console.log(safeId,props.folderId)}}>
            <div className='secretsAvailaible'>
              
                  
<div className='FolderIm'><img src={fol} alt="folderIcon" height={"100%"} ></img></div>
                  <span className='FolderN'>{props.folderName}</span>
              </div>
              <span className='deleteSecrets'>
                  <img src={del} alt="delete" height={"50%"}></img>
              </span>
           </div>);
}
// dispatch(deleteFolder(safeId, props.folderId));

export default Folder;