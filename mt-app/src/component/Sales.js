import './Sales.css'
import React  from 'react';
import Availaible from './Availaible';
import Empty from './Empty';
import SafeSearch from './SafeSearch';
import SafeDetails from './SafeDetails';
import SafeSecrets from './SafeSecrets';
import { useSelector } from 'react-redux';

const Sales = () => {

const Safe=useSelector(state=>state.safe)
    return (
        <>

        <div className="mainTab">
            <div className='mainTabwoPad'>
            <div className='safeAvailaible'>
                <div className='searchBox'><SafeSearch/></div>
            <div className="SafeBox">{ Safe.length !==0 ?  <Availaible  />: <Empty  /> 
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
        
        
        </>
    );

  };
  
  export default Sales;