import { useState } from 'react';
import { useSelector } from 'react-redux';
import './CreateIcon.css'
import SafesForm from './SafesForm';
function CreateIcon(props) {
    const safeId=useSelector(state=>state.id)
    const newSafe = {
        safeId:`${safeId}`,
        safeName:"",
        ownerName:"",
        type:"personal",
        desc:"",
        folder:[]
    };
    
const [creat,setCreat]=useState(0);
    const handleClose = () =>{
        setCreat(0)
        }
  
        const setCreate = ()=> {
            setCreat(1)
        }

 return (  <div className='imageBox'>
        <button className='imageButton' onClick={setCreate} title='Create New Safe'>+</button>
   {creat ?  <SafesForm  data={newSafe}  handleClose={handleClose} edit={0}/> : null }

    </div> );
}

export default CreateIcon;