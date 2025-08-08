import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery, useRegisterMutation } from '../app/api/apiSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import InputField from '../component/InputField';
import PasswordInputField from '../component/PasswordInputField';

const Register = ({data, loadingUser, refetch}) => {

    const navigate = useNavigate();
    const [register, {isLoading, isError}] = useRegisterMutation()
    const[credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword:''
    });


    const handleChange = (e) =>{
        const { name, value } = e.target;
        setCredentials({ ...credentials,[name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {name, email, password, confirmPassword} = credentials
        if(!name || ! email || !password || !confirmPassword) return toast.error("All fields are required");
        if(password !== confirmPassword) return toast.error("Password must match.")

        try {
            const newUser =await register(credentials).unwrap()
            toast.success("Registered successifully");
            setCredentials({name:"", email: "", password:"", confirmPassword: ""})
            navigate('/login')

            
        } catch (error) {
            toast.error("user registration failed.")
            console.log(error)
        }
    }

    // if ( loadingUser ) return <p>Loading ...</p>

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600">Create an Account</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <InputField type='text' label="Name" name='name' onChange={handleChange} value={credentials.name} required={true} />
          

          {/* Email */}
          <InputField type='email' label="Email" name='email' onChange={handleChange} value={credentials.email} required={true} />

          {/* Password */}
          <PasswordInputField label="Password" name="password" value={credentials.password} onChange={handleChange} />

          {/* Confirm Password */}
          <PasswordInputField label="Confirm Password" name="confirmPassword"
            value={credentials.confirmPassword} onChange={handleChange} />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Navigation */}
        <p className="text-center text-sm text-gray-600">
          Have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register