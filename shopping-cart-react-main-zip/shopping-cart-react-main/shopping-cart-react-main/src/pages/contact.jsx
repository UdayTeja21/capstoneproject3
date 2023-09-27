// import React from "react";
// import "./contact.css";

// export const Contact = () => {

//   return <div>
//     <center><h1>welcome to Smart Shop</h1></center>
//     <center>
//     <h4>These are our contact details</h4>
   
//     <ul type="none">
//       <li>contact no:123-456-789</li>
//       <li>Email:SmartShoph@info</li>
//       <li>Address:new street mumbai</li>
//     </ul>
//     </center>
//   </div>;
// };


import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <center>
        <h1>Contact Smart Shop</h1>
      </center>
      <center>
        <h4>Get in Touch</h4>
        <p>
          We're here to assist you with any questions or inquiries you may
          have.
        </p>
        <p>
          <strong>Phone:</strong> +123-456-789
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@smartshop.com">info@smartshop.com</a>
        </p>
        <p>
          <strong>Address:</strong> 123 New Street, Mumbai, India
        </p>
      </center>

      {/* <div className="contact-form">
        <h4>Contact Form</h4>
        <p>
          Use the form below to send us a message. We'll get back to you as
          soon as possible.
        </p> */}
        {/* <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        // </form> */}
      {/* </div> */}
    </div>
  );
};
