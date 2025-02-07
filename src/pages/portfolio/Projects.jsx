import React from "react";
import "./Projects.css";
import Image from "../../assets/about.jpeg"
import ElkinWeb from '../../assets/elkinweb.png'
import Shop from "../../assets/shop.png"

// const projectsData = [
//   {
//     id: 1,
//     title: "ElkinGroup",
//     description: "Developed a responsive official website for Elkin Group using React.js, enhancing the company’s digital presence and increasing visitor engagement by 25%.",
//     link: "https://elkingroup.co.ke",
//     image: {Image},
//   },
//   {
//     id: 2,
//     title: "Art Vista",
//     description: "Built a platform for artists to showcase their work using React.js and Ruby with Sinatra, fostering a community for art enthusiasts.",
//     link: "https://artvista.com",
//     image: {Image},
//   },
//   {
//     id: 3,
//     title: "BeatRoute",
//     description: "Scrum Master for a collaborative project to create a playlist curation website using React.js, focusing on user interaction and smooth data retrieval.",
//     link: "https://beatroute.com",
//     image: {Image},
//   },
//   {
//     id: 4,
//     title: "ArStudy",
//     description: "Developed an AR-based Android application that gamifies classroom learning, merging educational technology with innovative mobile solutions.",
//     link: "https://arstudy.com",
//     image: {Image},
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="projects section" id="projects">
//       <h2 className="section_title">Projects</h2>
//       <span className="section_subtitle">What I've Built</span>

//       <div className="projects_container container grid">
//         {projectsData.map((project) => (
//           <div className="projects_card" key={project.id}>
//             <img
//               src={Image}
//               alt={project.title}
//               className="projects_image"
//             />
//             <div className="projects_content">
//               <h3 className="projects_title">{project.title}</h3>
//               <p className="projects_description">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="projects_button"
//               >
//                 View Project
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


const projectsData = [
  {
    id: 1,
    title: "ElkinGroup",
    description: "Developed a responsive official website for Elkin Trading (K) Ltd using React.js, enhancing the company’s digital presence and increasing visitor engagement by 25%.",
    link: "https://elkingroup.co.ke",
    image: ElkinWeb
  },
  {
    id: 2,
    title: "Work-Wise",
    description: "Built a platform for Employers to onboard new employees. A verified employee cannot be deleted from the db even by the admin. This was build using Ruby on Rails.",
    link: "https://github.com/Owallah/work-wise",
    image: "https://i0.wp.com/www.gsma.com/get-involved/working-groups/wp-content/uploads/2023/09/Mask-group-4.png?resize=616%2C450&ssl=1"
  },
  {
    id: 3,
    title: "Mern-Auth",
    description: "Built using the MERN Stack. This is an authentication project that employs modern auth practices like JWT. Backend is in NodeJs and ExpressJs. Frontend is ReactJs and DB is Mongo.",
    link: "https://github.com/Owallah/MERN-AUTH",
    image: "https://masterlocks.com/cdn/shop/products/IMG_4191_189ded38-6580-46fa-99a8-150e2f430571_700x700.png?v=1715628695"
  },
  {
    id: 4,
    title: "Owallah's Shop",
    description: "This project is a product page built using React, React Query, and TypeScript. It fetches product details from the Fake Store Api(https://fakestoreapi.com/products), displays them, and allows users to rate and review products. It also implements a mock admin dashboard with authendication and analytics. It utilizes the CRUD operations.",
    link: "https://the-band-interview.vercel.app/",
    image: Shop
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">What I've Built</span>

      <div className="projects_container container grid">
        {projectsData.map((project) => (
          <div className="project_card" key={project.id}>
            <div className="project_content">
              <div className="project_front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project_image"
                  loading="lazy"
                />
              </div>
              <div className="project_back">
                <h3 className="project_title">{project.title}</h3>
                <p className="project_description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button_flex"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;