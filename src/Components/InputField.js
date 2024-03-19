import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ placeholder='Enter Text', value, onChange, type = 'text', disabled = false, required = false, minLength, maxLength, pattern, errorMessage, style = {}, errorMessageStyle = {} }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        style={{
          width: '200px',
          padding: '8px',
          fontSize: '16px',
          border: '1px solid black',
          borderRadius: '4px',
          boxSizing: 'border-box',
          ...style,
        }}
      />
      {errorMessage && (
        <p style={{
          color: 'red',
          marginTop: '5px',
          ...errorMessageStyle, // Merge default error message style with user-defined style
        }}>{errorMessage}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  style: PropTypes.object, // Accept any style object
  errorMessageStyle: PropTypes.object, // Accept any error message style object
};

export default InputField;
