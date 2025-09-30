// import React from "react";

// function Contact() {
//   return (
//     <section className="contact" id="contact">
//       <h1 className="heading">
//         <span>Contact</span> Us
//       </h1>

//       <form>
//         <div className="inputBox">
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//         </div>

//         <div className="inputBox">
//           <input type="number" placeholder="Number" />
//           <input type="text" placeholder="Subject" />
//         </div>

//         <textarea placeholder="Your Message" cols="30" rows="10"></textarea>

//         <input type="submit" value="Send Message" className="btn" />
//       </form>
//     </section>
//   );
// }

// export default Contact;


import React from "react";
import "./Contact.css"; // Link to CSS

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> Us
      </h1>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Number" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;
