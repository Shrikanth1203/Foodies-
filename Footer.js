// import React from "react";
// import "./Footer.css"; // Ensure this CSS file is included

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-box">
//           <h3>Our Branches</h3>
//           <a href="location"> <i className="fas fa-map-marker-alt"></i> Hosur </a>
//           <a href="location"> <i className="fas fa-map-marker-alt"></i> Krishnagiri </a>
//           <a href="location"> <i className="fas fa-map-marker-alt"></i> Salem </a>
//           <a href="location"> <i className="fas fa-map-marker-alt"></i> Chennai </a>
//           <a href="location"> <i className="fas fa-map-marker-alt"></i> Coimbatore </a>
//         </div>

//         <div className="footer-box">
//           <h3>Quick Links</h3>
//           <a href="#home"> <i className="fas fa-chevron-right"></i> Home </a>
//           <a href="#packages"> <i className="fas fa-chevron-right"></i> Packages </a>
//           <a href="#services"> <i className="fas fa-chevron-right"></i> Services </a>
//           <a href="#pricing"> <i className="fas fa-chevron-right"></i> Pricing </a>
//           <a href="#contact"> <i className="fas fa-chevron-right"></i> Contact </a>
//           <a href="#blogs"> <i className="fas fa-chevron-right"></i> Blogs </a>
//         </div>

//         <div className="footer-box">
//           <h3>Contact Info</h3>
//           <a href="+91-9988776655"> <i className="fas fa-phone"></i> +91-9988776655 </a>
//           <a href="+91-9876543210"> <i className="fas fa-phone"></i> +91-9876543210 </a>
//           <a href="foodiesofficial@gmail.com"> <i className="fas fa-envelope"></i> foodiesofficial@gmail.com </a>
//           <a href="Chennai, Tamil Nadu - 600 006"> <i className="fas fa-map-marker-alt"></i> Chennai, Tamil Nadu - 600 006 </a>
//         </div>

//         <div className="footer-box">
//           <h3>Follow Us</h3>
//           <a href="Facebook"> <i className="fab fa-facebook-f"></i> Facebook </a>
//           <a href="Twitter"> <i className="fab fa-twitter"></i> Twitter </a>
//           <a href="Instagram"> <i className="fab fa-instagram"></i> Instagram </a>
//           <a href="LinkedIn"> <i className="fab fa-linkedin"></i> LinkedIn </a>
//         </div>
//       </div>

//       <div className="credit"> Created by <span>Foodies</span> | All Rights Reserved </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3>Our Branches</h3>
          <a href="location"> <i className="fas fa-map-marker-alt"></i> Hosur </a>
          <a href="location"> <i className="fas fa-map-marker-alt"></i> Krishnagiri </a>
          <a href="location"> <i className="fas fa-map-marker-alt"></i> Salem </a>
          <a href="location"> <i className="fas fa-map-marker-alt"></i> Chennai </a>
          <a href="location"> <i className="fas fa-map-marker-alt"></i> Coimbatore </a>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#home"> <i className="fas fa-chevron-right"></i> Home </a>
          <a href="#packages"> <i className="fas fa-chevron-right"></i> Packages </a>
          <a href="#services"> <i className="fas fa-chevron-right"></i> Services </a>
          <a href="#pricing"> <i className="fas fa-chevron-right"></i> Pricing </a>
          <a href="#contact"> <i className="fas fa-chevron-right"></i> Contact </a>
          <a href="#blogs"> <i className="fas fa-chevron-right"></i> Blogs </a>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>
          <a href="tel:+919988776655"> <i className="fas fa-phone"></i> +91-9988776655 </a>
          <a href="tel:+919876543210"> <i className="fas fa-phone"></i> +91-9876543210 </a>
          <a href="mailto:foodiesofficial@gmail.com"> <i className="fas fa-envelope"></i> foodiesofficial@gmail.com </a>
          <a href="https://www.google.com/maps"> <i className="fas fa-map-marker-alt"></i> Chennai, Tamil Nadu - 600 006 </a>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>
          <a href="footer"> <i className="fab fa-facebook-f"></i> Facebook </a>
          <a href="footer"> <i className="fab fa-twitter"></i> Twitter </a>
          <a href="footer"> <i className="fab fa-instagram"></i> Instagram </a>
          <a href="footer"> <i className="fab fa-linkedin"></i> LinkedIn </a>
        </div>
      </div>

      <div className="credit"> Created by <span>Foodies</span> | All Rights Reserved </div>
    </footer>
  );
}

export default Footer;
