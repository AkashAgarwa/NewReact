import {useParams} from 'react-router-dom'
function VaultAppRoles() {
    const {name} =useParams()
    return (  <div style={{  color:"white",  backgroundColor: "#1d212c" , height:"calc( 100vh - 4.375rem )"}}><h1>{name}</h1></div>);
}

export default VaultAppRoles;