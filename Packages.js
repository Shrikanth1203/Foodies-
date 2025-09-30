// import React from "react";
// import blog from '../assets/blog-1.jpg';
// import blog2 from '../assets/blog-2.jpg';
// import blog3 from '../assets/blog-3.jpg';
// import blog4 from '../assets/blog-4.jpg';
// import blog5 from '../assets/blog-5.jpg';
// import blog6 from '../assets/blog-6.jpg';

// const foodItems = [
//   { name: "Combo Burger", price: "299.99", img: blog },
//   { name: "Chicken Burger", price: "179.99", img: blog2 },
//   { name: "Chicken Biryani", price: "129.99", img: blog3 },
//   { name: "Mushroom Biryani", price: "109.99", img:blog4 },
//   { name: "Tandoori", price: "349.99", img: blog5 },
//   { name: "Grill Chicken", price: "399.99", img: blog6}
// ];

// function Packages() {
//   return (
//     <section className="packages" id="packages">
//       <h1 className="heading">
//         Our <span>Foods</span>
//       </h1>

//       <div className="packages-container">
//         {foodItems.map((item, index) => (
//           <div className="box" key={index}>
//             <div className="image">
//               <img src={item.img} alt={item.name} />
//               <h3>
//                 <i className="fas fa-utensils"></i> {item.name}
//               </h3>
//             </div>
//             <div className="content">
//               <div className="price">{item.price} </div>
//               <a href="Package.js" className="btn">
//                 Order Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Packages;


// // import React from "react";
// // import { Link } from "react-router-dom"; // Ensure you have React Router installed

// // const foodItems = [
// //   { name: "Combo Burger", price: 299.99, img: "./src/assets/images/blog-1.jpg" },
// //   { name: "Chicken Burger", price: 179.99, img: "./src/assets/images/blog-2.jpg" },
// //   { name: "Chicken Biryani", price: 129.99, img: "./src/assets/images/blog-3.jpg" },
// //   { name: "Mushroom Biryani", price: 109.99, img: "./src/assets/images/blog-4.jpg" },
// //   { name: "Tandoori", price: 349.99, img: "./src/assets/images/blog-5.jpg" },
// //   { name: "Grill Chicken", price: 399.99, img: "./src/assets/images/blog-6.jpg" }
// // ];

// // function Packages() {
// //   return (
// //     <section className="packages" id="packages">
// //       <h1 className="heading">
// //         Our <span>Foods</span>
// //       </h1>

// //       <div className="box-container">
// //         {foodItems.map((item, index) => (
// //           <div className="box" key={index}>
// //             <div className="image">
// //               <img src={item.img} alt={item.name} loading="lazy" />
// //               <h3>
// //                 <i className="fas fa-utensils"></i> {item.name}
// //               </h3>
// //             </div>
// //             <div className="content">
// //               <div className="price">₹{item.price.toFixed(2)}</div>
// //               <Link to="/contact" className="btn">
// //                 Order Now
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Packages;


import React from "react";
import blog from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";
import blog5 from "../assets/blog-5.jpg";
import blog6 from "../assets/blog-6.jpg";
import "./Packages.css"; // Import CSS

const foodItems = [
  { name: "Combo Burger", price: "₹299.99", img: blog },
  { name: "Chicken Burger", price: "₹179.99", img: blog2 },
  { name: "Chicken Biryani", price: "₹129.99", img: blog3 },
  { name: "Mushroom Biryani", price: "₹109.99", img: blog4 },
  { name: "Tandoori", price: "₹349.99", img: blog5 },
  { name: "Grill Chicken", price: "₹399.99", img: blog6 },
];

function Packages() {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        Our <span>Foods</span>
      </h1>

      <div className="packages-container">
        {foodItems.map((item, index) => (
          <div className="package-box" key={index}>
            <div className="image">
              <img src={item.img} alt={item.name} loading="lazy" />
              <h3>
                <i className="fas fa-utensils"></i> {item.name}
              </h3>
            </div>
            <div className="content">
              <div className="price">{item.price}</div>
              <a href="#order" className="btn">
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
