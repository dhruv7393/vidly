import React from 'react';

const Input = ({name, label, type, value, handleChange}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} className="form-control" id={name} aria-describedby={name} value={value} onChange={e => handleChange(e.currentTarget.value)} />
        </div>
     );
}
 
export default Input;