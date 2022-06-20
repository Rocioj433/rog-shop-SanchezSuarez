import React from "react";
import '../styles/contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <form className="form">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter phone"
        />
      </div>
      <div className="mb-3 form-check">
        <label for="FormControlTextarea">Consultas</label>
        <textarea className="form-control-check" id="FormControlTextarea1" rows="2" />
      </div>
      <div>
        <button type="submit" className="btn botn" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
