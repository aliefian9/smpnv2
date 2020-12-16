import React from "react";
import { Spinner } from "reactstrap";
import { Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getInventoryList: state.inventorys.getInventoryList,
    errorInventoryList: state.inventorys.errorInventoryList,
    HitungInventory: state.inventorys.getInventoryList.length,
  };
};

const AnalitikComponent = (props) => {
  let x = [];
  let y = [];
  let z = [];
  let a = [];
  let b = [];
  let c = [];
  for (let i = 0; i < props.HitungInventory; i++) {
    x[i] = props.getInventoryList[i].qty;
    y[i] = props.getInventoryList[i].name;
  }

  for (let i = 0; i < y.length; i++) {
    if (x[i] < 50) {
      a[i] = x[i];
      z[i] = y[i];
    }
  }

  for (let i = 0; i < y.length; i++) {
    if (x[i] > 50) {
      b[i] = x[i];
      c[i] = y[i];
    }
  }

  return (
    <Container>
      {props.getInventoryList ? (
        <div>
          <Row>
            <Col>
              <Card>
                <Card.Body className="text-center">
                  <Card.Title>JUMLAH BARANG YANG DIBAWAH 50</Card.Title>
                  <Card.Text>
                    {z} : {a}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="text-center">
                  <Card.Title>JUMLAH BARANG YANG DIATAS 50</Card.Title>
                  <Card.Text>
                    {c} : {b} <br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="text-center">
          {props.errorInventoryList ? (
            <h4>{props.errorInventoryList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(AnalitikComponent);
