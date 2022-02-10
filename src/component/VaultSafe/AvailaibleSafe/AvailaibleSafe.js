import CreateIcon from "../CreateIcon/CreateIcon";
import './AvailaibleSafe.css'
import SafeCard from "../SafeCards/SafeCard";
import { useSelector } from "react-redux";

function Availaible(props) {
let data=useSelector(state => state.safe);
const searchData=useSelector(state=>state.search)
console.log()
if( (searchData) && (Object.keys(data).length!==0))
{
  data= data.filter(data1=>data1.safeName.includes(searchData));
} 
const listItems =data.map((data1,index) =><li  key={data1.safeId}>
    <SafeCard value={data1}/>
</li>
) 
return (  
    
    <div className="availaibleMainTab">

<div className="safeList">
    <ul  style={{listStyle: "none" ,padding:"0px", margin:"0px"}}>
        {listItems}
    </ul>
</div>

    <div className="iconBox"><CreateIcon setCreate={props.setCreate}/></div>
    </div>);
}

export default Availaible;