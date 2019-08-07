import React from 'react';

const TextField = ({ inputKey, htmlFor, label, value, inputClassName, spanClassName, errorMessage, onChange }) => (
  <div>
    <p key={inputKey} className="field">
      <label className="field__label" htmlFor={htmlFor}>
      <span className="field-label">{label}</span>
      </label> 
      <input type="text" name={inputKey} value={value} className={inputClassName} onChange={onChange} />
      <span className={spanClassName}>{errorMessage}</span>
    </p>
  </div>
);

export default TextField;  

