import React from "react";
import '../styles/contact.css'

const Contact = () => {
  return (
    <form className="form">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3 form-check">
        <label for="FormControlTextarea">Consultas</label>
        <textarea className="form-control-check" id="FormControlTextarea1" rows="2" />
      </div>
      <div>
        <button type="submit" className="btn botn">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
