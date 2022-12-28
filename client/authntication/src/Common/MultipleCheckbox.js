import React from "react";

const MultipleCheckbox = (props) => {
  return (
      <input className="form-check-input" type="checkbox" 
      id={props.id}
      onChange={props.handleChange}
      checked={props.isChecked}/>
  );
};

export default MultipleCheckbox;
