/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 09/11/2025 - 13:34:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/11/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.className === "modal") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username) {
      alert("Please fill out the Username field.");
      return;
    }
    if (!email) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!phone) {
      alert("Please fill out the Phone Number field.");
      return;
    }
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      alert("Invalid date of birth. Please select a valid date.");
      return;
    }

    alert("Form submitted successfully!");
    setIsModalOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  return (
    <div className="modal" style={{ textAlign: "center", padding: "50px" }}>
      {!isModalOpen && (
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Open Form
        </button>
      )}

      {isModalOpen && (
        <div className="modal">
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              margin: "100px auto",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "300px",
              textAlign: "left",
            }}
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                style={{ width: "100%", marginBottom: "15px" }}
              />

              <button
                type="submit"
                className="submit-button"
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
