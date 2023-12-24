import React, { useState } from "react";
import Navbar from "../components/user/Navbar";
import { Link } from "react-router-dom";
import useraxios from "../useraxios"; // Update the path

export const Login = () => {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("credential")
    console.log(credential)
    try {
      console.log(credential)
      const response = await useraxios.post('/api/login/', credential);
      
      // Assuming your backend returns tokens in response.data
      const { access, refresh } = response.data;

      // Store tokens in localStorage for future requests
      localStorage.setItem('userAccessToken', access);
      localStorage.setItem('userRefreshToken', refresh);

      // Redirect or perform any other necessary actions after successful login
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login error, show error message to the user, etc.
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Username:</label>
            <input
              type="text"
              name="username"
              value={credential.username}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={credential.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
