import React from "react";

const Input = props => {
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random}`;


  return (
    <div>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      <span>{props.errorMessage}</span>
    </div>
  )
};

export default Input



