import './Safe.css'
import SafeCard from "../SafeCards/SafeCard";
import { useSelector } from "react-redux";
// import {ComptuImage} from '../../Images/safe.b9aa346a.png'
import SafeTopBar from '../SafeCards/SafeCard'
import {AddIcon} from '../../Images/AddIcon'
import React, { useState} from 'react';
import SafesForm from '../SafeForm/SafesForm';

function Safe(props) {
    
let data=useSelector(state => state.safe);
    const [creat,setCreat]=useState(0);
    const safeId=useSelector(state=>state.id)
        const handleClose = () =>{
            setCreat(0)
            }
      
            const setCreate = ()=> {
                setCreat(1)
            }
            const newSafe = {
                safeId:`${safeId}`,
                safeName:"",
                ownerName:"",
                type:"personal",
                desc:"",
                folder:[]
            };
const [searchTerm,setSearchTerm]=useState("");
const handleOnChange=(e)=>{
    setSearchTerm(e.target.value);
}
if( (searchTerm) && (data.length!==0))
{
data= data.filter(data1=>data1.safeName.includes(searchTerm));
} 
const listItems =data.map((data1,index) =><li  key={data1.safeId}>
    <SafeCard value={data1}/>
</li>
) 
return (  
    <>
<div className="safeMainTab">
<SafeTopBar searchTerm={searchTerm} handleOnChange={handleOnChange} numberOfdata={data.length}/>
{
data.length?
<div className="availaibleSafes">
<ul  style={{listStyle: "none" ,padding:"0px", margin:"0px"}}>
{listItems}
</ul>
<div className="addIcon nonEmpty"  onClick={setCreate} title='Create New Safe'><img  alt="AddIcon" src={AddIcon}></img></div>
</div>
:
<div className="noAvailaibleSafe">
<div className='CompImage'><img alt="ComputerIcon" src={ComptuImage} width={"100%"}></img></div>
<div className="addIcon"  onClick={setCreate} title='Create New Safe' ><img alt="AddIcon" src={AddIcon}></img></div>
</div>
}
</div>
{creat ?  <SafesForm  data={newSafe}  handleClose={handleClose} edit={0}/> : null} 
</>)

}
export default Safe;