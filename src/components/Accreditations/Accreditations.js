import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccreditationCard from "./AccreditationCard";
import Particle from "../Particle";
import iframe from "../../Assets/Projects/iFrame.png";

function Accreditations() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <h1 className="project-heading">
          <strong className="purple">Online Cources - Coursera </strong>
        </h1>
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Introduction to the Internet of Things and Embedded Systems"
              description="Sept 30, 2023 | University of California, Irvine"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Introduction to Big Data with Spark and Hadoop"
              description="Oct 10, 2023 | IBM"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Cryptography"
              description="Oct 5, 2023 |University of Maryland, College Park"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Android App Components - Intents, Activities, and Broadcast Receivers"
              description="Oct 2, 2023 | Vanderbilt University"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Introduction to Artificial Intelligence (AI)"
              description="Apr 12, 2023 | IBM"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Machine Learning with Python"
              description="Apr 10, 2023 | IBM"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Real-Time Cyber Threat Detection and Mitigation"
              description="Apr 10, 2023 | New York University"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Introduction to DevOps"
              description="Apr 9, 2023 | IBM"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Smart Cities – Management of Smart Urban Infrastructures"
              description="Mar 21, 2023 | École Polytechnique Fédérale de Lausanne"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Interactivity with JavaScript"
              description="Nov 9, 2022 | University of Michighan"
              verification="https://www.coursera.org/account/accomplishments/verify/RNVFJWP87MXS"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="TCP/IP and Advanced Topics"
              description="Aug 15, 2022 | University of Colorado"
            />
          </Col>{" "}
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Programming for Everybody (Getting Started with Python)"
              description="Aug 12, 2022 | IBM"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <AccreditationCard
              imgPath={iframe}
              isBlog={false}
              title="Initiating and Planning Projects"
              description="Aug 2, 2022 | University of California, Irvine"
            />
          </Col>{" "}
        </Row>
      </Container>
    </Container>
  );
}

export default Accreditations;
