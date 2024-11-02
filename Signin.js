import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const baseUrl = "http://localhost:3000"; // Hardcoded for simplicity; consider using environment variables
  const { user, dispatch } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect to /home if the user is authenticated
  if (user) {
    navigate("/home");
  }

  const registerUser  = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        ${baseUrl}/register,
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store user data in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.name,
          token: response.data.token,
          email: response.data.email,
        })
      );

      alert("User  registered successfully");
      dispatch({ type: "LOGIN", payload: response.data });
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }

    // Reset form fields
    setError("");
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <form onSubmit={registerUser }>
      <div className="bg-black">
        <div className="flex justify-center container mx-auto my-auto w-[90vw] h-screen items-center flex-col">
          <div className="text-slate-100 items-center">
            <div className="text-center pb-1">Welcome!</div>
          </div>

          <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-gray-300 rounded-md pt-6">
            <div className="w-3/4 mb-2">
              <input
                type="text" // Changed from "name" to "text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full py-2 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                placeholder="Name"
              />
            </div>

            <div className="w-3/4 mb-2">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-2 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                placeholder="Email address"
              />
            </div>

            <div className="w-3/4 mb-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="password"
                className="w-full py-2 px-4 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                placeholder="Password"
              />
            </div>

            <div className="w-3/4 mb-2">
              <button
                type="submit"
                className="py-2 bg-black w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              >
                SIGN UP
              </button>
            </div>

            {error && (
              <div className="w-3/4 mb-2">
                <div
                  className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-1 text-[15px]"
                  role="alert"
                >
                  <p>{error}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center container mx-auto mt-2 text-slate-100 text-sm">
            < div className="flex flex-col sm:flex-row justify-between md:w-1/2 items-center">
              <div 
                className="flex text-[15px] hover:text-blue-300 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Back to login
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;