import React, {useState } from "react";
import "./SafesForm.css";
import Button from './Button';
import Input from './Input';
import safeIcon from './Images/safe-icon.69ebc33f.png'
import Select from "./Select";
import { useDispatch } from "react-redux";
import { addData, safeEdit,} from "../Action";
const SafesForm = (props) => {
const newSafe=props.data;

 const [safe, setSafe] = useState(newSafe);
  const validateSafeForm = () => {
    if (
      safe.safeName.length < 1 ||
      safe.ownerName.length < 1
    )
      return true;

    if (safe.desc.length < 10) return true;

    return false;
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    setSafe({...safe,[id]: value});
  };  
const dispatch=useDispatch();
  return (
    
    <div className="safeFormMainTab">
      <form className="safes-form">
        <h1 className="safeFormHeading">Create Safe</h1>
        <div className="safes-form__info">
          <img src={safeIcon} alt="logo" className="safes-form__logo" />A Safe
          is a logical unit to store the secrets. All the safes are created
          within Vault. You can control access only at the safe level. As a
          vault administrator you can manage safes but cannot view the content
          of the safe.
        </div>
        <Input
          label="Safe Name"
          id="safeName"
          value={ safe.safeName}
          onChange={handleChange}
        />
        <Input
          label="Owner"
          id="ownerName"
          value={ safe.ownerName}
          onChange={handleChange}
        />
        <Select
          label="Type"
          id="type"
          value={safe.type}
          onChange={handleChange}
        />
        <Input
          label="Description"
          id="desc"
          value={ safe.desc}
          rows={2}
          onChange={handleChange}
          help
        >
          Please add a minimum of 10 characters
        </Input>
        <div className="safes-form__button-group">
          <Button label="Cancel" inverse onClick={ () => {props.handleClose();} } />
        {  props.edit ? (
            <Button
              label="Update"
              onClick={ (e) => {dispatch(safeEdit(safe)); props.handleClose(); } }
              disabled={validateSafeForm()}
            />
          ) : (
            <Button
              label="+ Create"
              onClick={ (e) => { dispatch(addData(safe)); props.handleClose(); } }
              disabled={validateSafeForm()}
            />
          )}
        </div>
      </form>
    </div>  
    )
};

export default SafesForm;
