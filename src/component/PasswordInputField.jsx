import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInputField = ({
  label,
  name,
  value,
  onChange,
  required = true,
  placeholder = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mb-4 relative">
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full p-2 pr-10 border-b-2 border-black bg-transparent focus:outline-none focus:border-indigo-600 transition"
      />
      <div
        className="absolute right-2 top-9 transform -translate-y-1/2 cursor-pointer text-gray-600"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </div>
    </div>
  );
};

export default PasswordInputField;
