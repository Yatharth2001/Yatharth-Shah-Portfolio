import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textUtils from "../../Assets/Projects/textUtils.png";
import talentBridge from "../../Assets/Projects/TalentBridge.png";
import iNotebook from "../../Assets/Projects/inoteBook.png";
import alarmSys from "../../Assets/Projects/alarmSys.png";
import newsXplorer from "../../Assets/Projects/newsXplorer.png";
import iframe from "../../Assets/Projects/iFrame.png";
import bookstore from "../../Assets/Projects/bookStore.png";
import imgCaption from "../../Assets/Projects/imgCaption.png";
import stackOverflow from "../../Assets/Projects/stackOverflow.png";
import bingeShow from "../../Assets/Projects/bingeShow.png";
import tindog from "../../Assets/Projects/tinDog.png";
import taskBoard from "../../Assets/Projects/taskBoard.png";

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
        <h1 className="project-heading">
          <strong className="purple">Internship Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iframe}
              isBlog={false}
              title="iFrame @ADIMIS"
              description="Designed and developed front-end for Netherland based chiptuning company in which user can enter car license plate number/ choose their car manually from menu and can see the customization options for their car and can get quote information."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore @Tatvasoft Pvt. Ltd."
              description="As a part of summer internship at Tatvasoft, I have created project using company's API and developed Bookstore project with role based authentication and functionalities using reactjs, javascript and material ui. "
              ghLink="https://github.com/dishajadav12/bookstore"
            />
          </Col>
        </Row>
      </Container>

      {/* College Projects */}

      <Container>
        <h1 className="project-heading">
          <strong className="purple">College Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked during my academic curriculum.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alarmSys}
              isBlog={false}
              title="Automatic vehicle accident alarm system ( IOT final project) "
              description="Created a NodeMCU and MPU6050-based system to improve emergency response for road accident victims. Integrated sensors, micro-controllers, GPS, and communication modules for optimal functionality. Utilized various protocols including cellular, Wi-Fi, Bluetooth, SMS, and app-based communication."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgCaption}
              isBlog={false}
              title="Image caption generator (AI/ML)"
              description="
I designed and implemented an Image Caption Generator as a deep learning project for my portfolio. Its purpose is to autonomously produce descriptive captions for images. The system employs a convolutional neural network (CNN) to extract image features and a recurrent neural network (RNN) to generate text. It's trained on extensive datasets like COCO or Flickr30k, incorporating an attention mechanism for improved caption generation.
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackOverflow}
              isBlog={false}
              title="Stack Overflow Clone"
              description="I created a Stack Overflow clone using the MERN stack. This platform mimics the functionality of Stack Overflow, allowing users to ask questions, provide answers, and engage in discussions on various topics. It features user authentication, question posting, answer submission, and upvoting/downvoting. The MERN stack provides a robust foundation for building scalable and efficient web applications, ensuring seamless interaction and real-time updates for users."
              ghLink="https://github.com/dishajadav12/Stack_Overflow_client"
              demoLink=" https://stack-overflow-client-fawn.vercel.app/"
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
              imgPath={iNotebook}
              isBlog={false}
              title="iNoteBook"
              description="Designed and Created digital note taking website from which user can add and modify their notes accordingly. Used MongoDB to store and manage user and notes data. Used CSS and Bootstrap for responsive design. Technology used: HTML5, CSS3, Bootstrap, JavaScript, React.js, Node.js, express.js.                   "
              ghLink="https://github.com/dishajadav12/Inotebook_Client"
              demoLink=" https://inotebook-client-eight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtils}
              isBlog={false}
              title="Text utils"
              description="My first reactjs project with functionalities which provides basic text utilities like number of words and letters, and other differnt filtration options."
              ghLink="https://github.com/dishajadav12/TextUtils"
              demoLink="https://text-utils-beta-three.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsXplorer}
              isBlog={false}
              title="NewsXplorer"
              description="News website crrated using reactjs and bootstrap libraries which fetches data from NewsAPI and provides daily news articles. I have also added functionalities like infinite scrolling and filter news according categories of news in this app"
              ghLink="https://github.com/dishajadav12/newsxplorer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bingeShow}
              isBlog={false}
              title="Binge show"
              description="Developed a ReactJS project that uses the TVMaze API to display a list of TV shows and their details. The first screen displays the list of shows with some basic information, and the second screen shows the summary of a selected show."
              ghLink="https://github.com/dishajadav12/bingeShow"
              demoLink="https://charming-queijadas-97a350.netlify.app/"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskBoard}
              isBlog={false}
              title="Task Board"
              description="Developed single page web app to manage tasks using reactjs. User can perform CRUD operations and can drag and drop tasks according to the stage of task."
              ghLink="https://github.com/dishajadav12/Task-Board"
              demoLink="https://652927227aab9b1c45450823--taupe-longma-45a436.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talentBridge}
              isBlog={false}
              title="Talent Bridge"
              description="Designed a landing page using reactjs and design libraries which has unique and eyecatiching UI."
              ghLink="https://github.com/dishajadav12/talent_bridge"
              demoLink="https://talent-bridge-beta.vercel.app/
"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Tin Dog"
              description="My first ever landing page designed using HTML5, CSS3 and Bootstrap."
              ghLink="https://github.com/dishajadav12/TinDog"
              demoLink="https://6616544be7ebdb064ceaf44b--animated-madeleine-ef2f94.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
