import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default withRouter(({ history }) => {
  return (
    <div>
      <Row className="mb-2">
        <Col>
          <Button color="dark" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Col>
      </Row>
    </div>
  );
});
