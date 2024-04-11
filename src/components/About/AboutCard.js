import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">Disha Jadav </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />I am currently pursuing my B.E in{" "}
            <span className="purple">Computer Engineering</span> at &nbsp;{" "}
            <br />
            <a style={{ color: "white" }} href="http://www.adit.ac.in/">
              {" "}
              A.D. Patel Institute of Technology, The CVM University.
            </a>{" "}
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Drawing and Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Cooking ( I do consider my self a decent
              cook! )
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
