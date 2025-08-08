import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useLoginMutation } from "../app/api/apiSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import InputField from "../component/InputField";
import PasswordInputField from "../component/PasswordInputField";

const Login = ({ user, loadingUser, userError, refetch }) => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [seePassword, setSeePassword] = useState(false);

  useEffect(() => {
    if (!loadingUser && user) navigate("/");
  }, [navigate, user]);

  if (loadingUser) return <p>Loading ... </p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(credentials).unwrap();
      toast.success("Login successful!");
      navigate("/");
      setCredentials({ email: "", password: "" });
      refetch();
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="email"
            label="Email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
            required={true}
          />

          <PasswordInputField
            label="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
          <p className="mt-2">
            Forgot Password?{" "}
            <a
              href="/forgot-password"
              className="text-indigo-600 hover:underline"
            >
              Reset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
