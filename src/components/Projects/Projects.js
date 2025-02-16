import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CineChum from "../../Assets/Projects/CineChum.png";
import GitHub from "../../Assets/Projects/Github.png";
import Shed from "../../Assets/Projects/Shed.png";
import SiteScripter from "../../Assets/Projects/sitescripter.png";
import TaskMate from "../../Assets/Projects/TaskMate.png";
import ShoppingCart from "../../Assets/Projects/Shopping Cart.png";
import Sparkets from "../../Assets/Projects/sparkets.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SiteScripter}
              isBlog={false}
              title="Site Scripter"
              description="An E-Commerce web application built with React, Tailwind CSS, JSON Server, JWTAuth, and Context API, and deployed on Netlify/Render. It features dynamic product listings, user authentication, and state management for seamless shopping experiences. The app is styled with Tailwind CSS for a modern UI and uses JSON Server for a mock backend. It leverages Context API for efficient state management and JWTAuth for secure user authentication.."
              ghLink="https://github.com/Yatharth2001/SiteScripter"
              demoLink="https://sitescripter-ul.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CineChum}
              isBlog={false}
              title="CineChum"
              description="Designed and implemented multiple sections with current API data such as Home, Popular movies, top rated
 movies,upcoming movies to categorize and display movies effectively. Created a detailed movie information page showcasing movie name, duration, budget, review, earnings, genre, IMDb
 review, and number of reviews. Implemented a search option for users to retrieve detailed information about any movie quickly and efficiently."
              ghLink="https://github.com/Yatharth2001/CineChum"
              demoLink="https://cinechum.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GitHub}
              isBlog={false}
              title="GitHub User Finder"
              description="Retrieved user data through an API and displayed profile pictures and usernames of all relevant users.
              Allowed users to click on individual profiles to see detailed information including repositories, followers, following,
              Twitter handle, and location.
 Enabled navigation to github link of user. "
              ghLink="https://github.com/Yatharth2001/Github-Finder-Repo"
              demoLink="https://github-rep-finder.netlify.app/"
            />
          </Col>
        </Row>
      </Container>

      {/* Personal Projects */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects that I've developed during my free time as a part of learning
          and growing.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingCart}
              isBlog={false}
              title="Zap Zone"
              description="Zap Zone is an online shopping platform featuring a variety of headphones from popular brands like Sony, JBL, and Apple. It offers detailed product listings with prices and an option to add items to the cart for easy purchasing. The user-friendly interface simplifies browsing and shopping"
              ghLink="https://github.com/Yatharth2001/ZapZone"
              demoLink="https://yatharth-zap-zone.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskMate}
              isBlog={false}
              title="TaskMate"
              description="TaskMate is a React-based app designed for managing tasks efficiently. It allows users to add new tasks, view their to-do list, and clear all completed tasks with ease. The minimalistic design ensures a user-friendly experience. "
              demoLink="https://taskmate-yshah.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shed}
              isBlog={false}
              title="Shed"
              description="Shed DesignStudio lets users visualize and customize metal and steel buildings in 3D. It offers features like template-based quick selection, mezzanine floor configuration, PDF export, and integration with AutoCAD/Tekla."
              ghLink="https://github.com/Yatharth2001/steelstride-designstudio"
              demoLink="https://steelstride-designstudio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sparkets}
              isBlog={false}
              title="Sparkets"
              description="Sparketsis a powerful eCommerce platform built with the MERN stack and Redux Toolkit. It now features Razorpay integration, enabling secure and seamless payment processing. Customers can easily make payments using various methods, enhancing the overall shopping experience."
              ghLink="https://github.com/Yatharth2001/Sparkets"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
