import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Input";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { validateEmail } from "../../utils/helper";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.ADMIN.LOGIN, {
        email,
        password,
      });
      console.log(response)

      const { token, admin } = response.data;
      console.log(token)

      if (token) {
        localStorage.setItem("adminToken", token);
        // You can navigate to a separate Admin Dashboard
        navigate("/admin/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Admin Login</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your admin credentials
        </p>

        <form onSubmit={handleAdminLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Admin Email Address"
            placeholder="admin@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            ADMIN LOGIN
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default AdminLogin;
