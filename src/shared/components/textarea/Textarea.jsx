import React from 'react'
import './textarea.css';
const Textarea = ({name, required,label,cols,rows}) => {
    return (
        <div className='form-input'>
            <label for={name}>{label}:</label>
            <textarea name={name} cols={cols} rows={rows} required={required}/>
        </div>
      )
}

export default Textarea