import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAddUserMutation } from "../api/userApi";

const AddUser = () => {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addUser(form).unwrap();
      alert("User added successfully!");
      navigate("/users");
    } catch {
      alert("Error adding user");
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <div className="dashboard-card">
          <h1 className="dashboard-title">Add New User</h1>

          <form onSubmit={handleSubmit} className="form-column">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input-id"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-id"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input-id"
              onChange={handleChange}
              required
            />

            <button className="dashboard-btn primary">
              Save User
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
