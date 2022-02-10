import './Main.css'
import React  from 'react';
import SafeDetails from '../SafeDetails/SafeDetails';
import SafeSecrets from '../VaultSecrets/SafeSecrets/SafeSecrets';
import Safe from '../VaultSafe/Safe/Safe';

const Main= () => {

    return (
        <>

        <div className="mainTab">
            <div className='mainTabwoPad'>
            <div className='safeAvailaible'>
         <Safe />
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
  
  export default Main;