import './SafeDetails.css'
import img from './Images/Banner_img.png'
import { useDispatch, useSelector } from 'react-redux';
function SafeDetails() 
{
    
    let obj ={
       name:"Sample / SafeName",
        desc:"A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.",
    };
    
const disatch=useDispatch(state=>state.IS);
    // description=description.substring[0,100];
    const data=useSelector(state=>state.IS)
    const name=Object.keys(data).length!==0 ? data.safeName : obj.name;
    const desc=Object.keys(data).length!==0 ? data.desc : obj.desc;
    

    return (  <div className="SafeDetailsMainTab">
        <div className='SafeDetails'>
            <span className='SafeDetailsName' title={name}>{name}</span>
            <span className='SafeDetailsDesc' title={desc}>{desc}</span>
        </div>
        
    </div>);
}
SafeDetails.defaultProps = {
    name: "Rahul",
    description:"saasd" }
    

export default SafeDetails;