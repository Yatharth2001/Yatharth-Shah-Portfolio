import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  const iconTooltips = {
    SiVisualstudiocode: "Visual Studio Code",
    SiPostman: "Postman",
    SiSlack: "Slack",
    SiVercel: "Vercel",
    SiRender: "Render",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiVisualstudiocode}</Tooltip>}
        >
          <div>
            <SiVisualstudiocode />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiPostman}</Tooltip>}
        >
          <div>
            <SiPostman />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiVercel}</Tooltip>}
        >
          <div>
            <SiVercel />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiRender}</Tooltip>}
        >
          <div>
            <SiRender />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
