import React, { useState } from "react";
import "./SecretForm.css";
import Input from "./Input";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addFolder} from "../Action";

const SecretForm = (props) => {
const folderId=useSelector(state=>state.fid)
  const newSecret = { id : `${folderId}`,
    name: "" };
  const [secret, setSecret] = useState(newSecret);

  const handleChange = (e) => {

    const { id, value } = e.currentTarget;
    const updatedSecret = { ...secret, [id]: value };

    setSecret(updatedSecret);
  };

  const data=useSelector(state=>state.IS);
  const dispatch=useDispatch();

  const validateSecretsForm = () => {
    if (secret.name.length) return false;

    return true;
  };

  return (
      <div className="secretFormMainTab">
   <div className="FormFolder">
      <form className="secrets-form">
        <h1 className="secrets-form__heading">Add Folder</h1>
        <Input
          label="Folder Name"
          id="name"
          value={secret.name}
          onChange={handleChange}
          help
        >
          Please enter lowercase alphabets, numbers and underscores only.
        </Input>
        <div className="secrets-form__button-group">
          <Button label="Cancel" inverse onClick={props.handleClose} />
          <Button
            label="Save"
            onClick={ () => {props.handleClose(); dispatch(addFolder(data.safeId,secret)) } }
            
          />
        </div>
      </form>
   </div>
   </div>
  );
};

export default SecretForm;
