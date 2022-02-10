import './CreateIcon.css'
function CreateIcon(props) {


 return ( <> <div className='imageBox'>
        <div className='plusIcon' onClick={props.setCreate} title='Create New Safe'>+</div>
    </div>
    </>);
}

export default CreateIcon;