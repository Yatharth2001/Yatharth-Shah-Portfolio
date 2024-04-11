import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home_avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who<span className="purple"> I</span> Am?
            </h1>
            <p className="home-about-body">
              I am just a girl who got curious about how computer works while
              sitting in computer lab during her primary education and started
              exploring about computers and never stopped...
              <br />
              <br /> Designing is my hobby and Developing is my passion.
              <i>
                <b className="purple">
                  {" "}
                  So, getting bored is never an option.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interests are building and designing new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Artificial intelligence.</b>
              </i>
              <br />
              <br />I am a person who likes to explore and learn new things at
              every stage of my life and meeting new people and learning
              something from them is my key to grow as a person.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar my-5">
            <Tilt>
              <img src={myImg} width={300} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dishajadav12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/disha-jadav-606484209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dishaa.jadav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
