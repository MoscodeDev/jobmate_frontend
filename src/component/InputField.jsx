import React from 'react';

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = true,
  placeholder = '',
}) => {
  return (
    <div className="w-full mb-4 relative">
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none focus:border-indigo-600 transition"
      />
    </div>
  );
};

export default InputField;
