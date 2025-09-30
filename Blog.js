// import React from "react";
// import image1 from '../assets/img1.jpg';
// import image2 from '../assets/img2.jpg';
// import image3 from '../assets/img3.jpg';

// const Blog = () => {
//   return (
//     <section className="blogs" id="blogs">
//       <h1 className="heading">
//         our <span>blogs</span>
//       </h1>
//       <div className="blog-container">
//         <div className="blog" data-aos="fade-up">
//           <div className="image">
//             <img src={image1} alt="" />
//           </div>
//           <div className="content">
//             <h3>What is bombay and hyderabadi biryani?</h3>
//             <a href="content" className="btn">
//               read more
//             </a>
//             <div className="icons">
//               <a href="icon">
//                 <i className="fas fa-calendar"></i> 1st jan, 2021
//               </a>
//               <a href="icon">
//                 <i className="fas fa-user"></i> by admin
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="blog" data-aos="fade-up">
//           <div className="image">
//             <img src={image2} alt="" />
//           </div>
//           <div className="content">
//             <h3>How many types of burger are there?</h3>
//             <a href="content" className="btn">
//               read more
//             </a>
//             <div className="icons">
//               <a href="icon">
//                 <i className="fas fa-calendar"></i> 1st jan, 2021
//               </a>
//               <a href="icon">
//                 <i className="fas fa-user"></i> by admin
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="blog" data-aos="fade-up">
//           <div className="image">
//             <img src={image3} alt="" />
//           </div>
//           <div className="content">
//             <h3>Did you know some facts about pizza?</h3>
//             <a href="content" className="btn">
//               read more
//             </a>
//             <div className="icons">
//               <a href="content">
//                 <i className="fas fa-calendar"></i> 1st jan, 2021
//               </a>
//               <a href="content">
//                 <i className="fas fa-user"></i> by admin
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;


import React from "react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import "./Blog.css"; // Import CSS

const blogData = [
  {
    img: image1,
    title: "What is Bombay and Hyderabadi Biryani?",
    date: "1st Jan, 2021",
    author: "admin",
  },
  {
    img: image2,
    title: "How many types of burger are there?",
    date: "1st Jan, 2021",
    author: "admin",
  },
  {
    img: image3,
    title: "Did you know some facts about pizza?",
    date: "1st Jan, 2021",
    author: "admin",
  },
];

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        Our <span>Blogs</span>
      </h1>
      <div className="blog-container">
        {blogData.map((item, index) => (
          <div className="blog-card" key={index} data-aos="fade-up">
            <div className="blog-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="blog-content">
              <h3>{item.title}</h3>
              <a href="#readmore" className="btn">
                Read More
              </a>
              <div className="blog-icons">
                <a href="#date">
                  <i className="fas fa-calendar"></i> {item.date}
                </a>
                <a href="#author">
                  <i className="fas fa-user"></i> by {item.author}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
