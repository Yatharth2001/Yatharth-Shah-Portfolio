import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            It's <span className="purple">Yatharth Shah</span> here! <br />
            <br />
            I am a dynamic Full Stack Developer with expertise in both front-end
            and back-end technologies. With a strong foundation in JavaScript, ReactJS, NextJS, NodeJS, Express
            and MongoDB. I specialize in building responsive and
            high-performance web applications.
            <br />I hold a Post Graduation in Web Development from{" "}
            <span className="purple">Conestoga College</span>, Kitchener, ON
            and a{" "}
            <span className="purple">
              Bachelor of Technology in Computer Science
            </span>{" "}
            from{" "}
            <span className="purple">
              Silver Oak College of Engineering and Technology
            </span>
            .
            <br />
            My experience spans from designing intuitive user interfaces to
            developing robust back-end solutions, ensuring seamless
            functionality and a positive user experience.
            <br />
            I thrive on leveraging modern frameworks and scalable technologies
            to deliver innovative solutions that meet client needs and enhance
            operational efficiency.
            <br />
            <br />
           
          
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
