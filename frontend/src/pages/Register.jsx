import React from "react";
import { useState } from "react";
import API from "../services/api";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/register", formData);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      alert("Registration Succussful");
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Failed Registration");
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full Name"
            value={formData.fullName} //controlled component
            onChange={handleChange}
          />

          <input
            type="text"
            name="userName"
            placeholder="Enter your User Name"
            value={formData.userName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dob"
            placeholder="Enter your date of birth"
            value={formData.dob}
            onChange={handleChange}
          />

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="bca">bca</option>
            <option value="mca">mca</option>
            <option value="mba">mba</option>
          </select>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
