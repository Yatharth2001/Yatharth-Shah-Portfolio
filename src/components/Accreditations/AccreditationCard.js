import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

function AccreditationCard(props) {
  return (
    <Card className="project-card-view">
      <div className="row">
        <div className="col-12 col-md-2 certificate-icons">
          <TbCertificate />
        </div>
        <div className="col-12 col-md-8">
          <Card.Body>
            <Card.Title style={{ textAlign: "left" }}>{props.title}</Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                marginBottom: "30px",
              }}
            >
              {props.description}
              <div style={{ marginTop: "10px" }}>
                <Button
                  variant="primary"
                  href={props.verification}
                  target="_blank"
                >
                  Verify&nbsp; <FaExternalLinkAlt />
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}
export default AccreditationCard;
