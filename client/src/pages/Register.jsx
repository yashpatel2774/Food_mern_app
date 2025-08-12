import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from 'react-icons/io5';

const Register = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [agree, setAgree] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  if (!isOpen) return null;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoginMode && !agree) {
      toast.error("You must agree to the terms.");
      return;
    }

    const endpoint = isLoginMode ? "/api/user/login" : "/api/user/register";
    const payload = isLoginMode
      ? { email: user.email, password: user.password }
      : { name: user.username, email: user.email, password: user.password };

    try {
      const res = await fetch(`http://10.209.126.144:4000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token); // Store token
        onClose(); // Close modal
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-blue-100 p-6 rounded-lg w-[90%] max-w-sm relative">

        <button
          className="absolute top-3 right-3 text-3xl text-gray-600 hover:cursor-pointer hover:text-black"
          onClick={onClose}
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleInput}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {!isLoginMode && (
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mt-1 hover:cursor-pointer"
              />
              <label htmlFor="agree" className="text-sm text-gray-600">
                By continuing, I agree to the <span className="text-orange-500 underline">terms of use</span> & <span className="text-orange-500 underline">privacy policy</span>.
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:cursor-pointer hover:bg-orange-600 transition"
          >
            {isLoginMode ? "Login" : "Create account"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLoginMode ? (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setIsLoginMode(false)}
                className="text-orange-500 underline cursor-pointer"
              >
                Sign up here
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setIsLoginMode(true)}
                className="text-orange-500 underline cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Register;
