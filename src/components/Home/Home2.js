import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
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
              Who am<span className="purple"> I</span> ?
            </h1>
            <p className="home-about-body">
              I am just a boy who got curious about how computers work while
              sitting in a computer lab during my early education. That
              curiosity turned into a passion, and I have been exploring the
              world of technology ever since.
              <br />
              <br /> My interests lie in building and designing innovative web
              technologies and products, along with exploring areas related to
              artificial intelligence. <br />
              <br /> I am someone who loves to explore and learn new things at
              every stage of life. Meeting new people, sharing experiences, and
              learning from them is what helps me grow as a person. <br />

              <br /> Beyond coding, I enjoy running, playing Valorant, and badminton.
              These keep me active and energized, both physically and mentally.
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
                  href="https://github.com/Yatharth2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yatharth-shah15/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
