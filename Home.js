// import React from "react";

// function Home() {
//   return (
//     <section className="home" id="home">
//       <div className="image">
//         <img
//           src="https://cdn.vox-cdn.com/thumbor/8hZcUxUOBb4GV1JiDsz1USpT29w=/385x352:1561x1061/1200x800/filters:focal(831x620:1137x926)/cdn.vox-cdn.com/uploads/chorus_image/image/70609268/Burger_King_Plant_based_Double_Cheeezeburger.0.jpg"
//           alt="Burger"
//         />
//       </div>

//       <div className="content">
//         <h3>Most Tasty Burger For You</h3>
//         <p>
//           A burger is a perfect mix of juicy, seasoned meat and fresh toppings,
//           all packed into a soft bun. Every bite bursts with rich flavors.
//         </p>
//         <a href="Home.js" className="btn">
//           Explore Now
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;



import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-image">
          <img
            src="https://cdn.vox-cdn.com/thumbor/8hZcUxUOBb4GV1JiDsz1USpT29w=/385x352:1561x1061/1200x800/filters:focal(831x620:1137x926)/cdn.vox-cdn.com/uploads/chorus_image/image/70609268/Burger_King_Plant_based_Double_Cheeezeburger.0.jpg"
            alt="Burger"
          />
        </div>

        <div className="home-content">
          <h3>Most Tasty Burger For You</h3>
          <p>
            A burger is a perfect mix of juicy, seasoned meat and fresh toppings,
            all packed into a soft bun. Every bite bursts with rich flavors.
          </p>
          <a href="#explore" className="home-btn">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
