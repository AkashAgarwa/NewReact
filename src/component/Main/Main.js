import './Main.css'
import React  from 'react';
import AvailaibleSafe from '../VaultSafe/AvailaibleSafe/AvailaibleSafe'
import EmptySafe from '../VaultSafe/EmptySafe/EmptySafe';
import SafeTopsBar from '../VaultSafe/SafeTopBar/SafeTopBar'
import SafeDetails from '../SafeDetails/SafeDetails';
import SafeSecrets from '../VaultSecrets/SafeSecrets/SafeSecrets';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SafesForm from '../SafeForm/SafesForm';

const Main= () => {
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
const Safe=useSelector(state=>state.safe)
    return (
        <>

        <div className="mainTab">
            <div className='mainTabwoPad'>
            <div className='safeAvailaible'>
                <div className='searchBox'><SafeTopsBar/></div>
            <div className="SafeBox">{ Safe.length !==0 ?  <AvailaibleSafe setCreate={setCreate}/>: <EmptySafe setCreate={setCreate} /> 
           }      
            </div>
            </div>
            <div className='safeDetailsAndSecrets'>
                <div className='safeDetailes'>
                  <SafeDetails /> 
                </div>
                <div className='safeSecrets'>
                <SafeSecrets />
                </div>
            </div>
            </div>
        </div>
        
    {creat ?  <SafesForm  data={newSafe}  handleClose={handleClose} edit={0}/> : null} 
        
        </>
    );

  };
  
  export default Main;