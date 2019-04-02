import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

const index = props => {
  return (
    <div className="container">
      <Row>
        <Col style={{ marginTop: "20px", width: "400px" }}>
          <Card>
            <Card
              style={{ backgroundColor: "rgb(248, 249, 250)", height: "800px" }}
            >
              <CardTitle
                style={{
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "20px"
                }}
              >
                Modi Alotaibi
              </CardTitle>
              <CardSubtitle style={{ paddingLeft: "20px" }}>
                Address Information: <br /> Riyadh - Diyrab District <br /> 7598
                - 14972
              </CardSubtitle>
              <CardText style={{ paddingLeft: "20px" }}>
                Billing Information: <br /> Bank Account
              </CardText>
              <Button
                style={{
                  backgroundColor: "rgb(155, 166, 87)",
                  width: "90px",
                  paddingLeft: "20px"
                }}
              >
                Edit <i className="fas fa-user-edit" />
              </Button>
            </Card>
          </Card>
        </Col>
        <Col style={{ marginTop: "20px", width: "400px" }}>
          <Card>
            <Card
              style={{ backgroundColor: "rgb(248, 249, 250)", height: "800px" }}
            >
              <CardTitle
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingLeft: "20px",
                  paddingTop: "20px"
                }}
              >
                Orders History
              </CardTitle>
              <CardSubtitle style={{ paddingLeft: "20px" }}>
                Address Information: <br /> Riyadh - Diyrab District <br /> 7598
                - 14972
              </CardSubtitle>
              <CardText style={{ paddingLeft: "20px" }}>
                Billing Information: <br /> Bank Account
              </CardText>
              <Button
                style={{ backgroundColor: "rgb(155, 166, 87)", width: "90px" }}
              >
                Edit <i className="fas fa-user-edit" />
              </Button>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default index;
