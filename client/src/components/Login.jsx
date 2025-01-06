import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  return (
    <div className=''
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Chartify 😄</h1>
        <form>
          <div className="mb-4">
            {/* Any additional fields */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200" onClick={()=>navigate("/chat")}
          >
            Get in
          </button>
          <p className="mt-4 text-center">
            Want to find friends for chat?{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register yourself
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
