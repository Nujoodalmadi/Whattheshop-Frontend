// React
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// Images
import homeimage from "../images/homepage.png";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Card className=" text-white">
          <Card.Img
            style={{ position: "fixed", width: "1500px" }}
            src={homeimage}
            alt="Card image"
          />
          <div>
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  fontSize: "80px",
                  marginTop: "30px"
                }}
              >
                CHOOSE YOUR TEA ..
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "35px",
                  padding: "75px",
                  fontStyle: "italic",
                  fontWeight: "bolder"
                }}
              >
                .. Whether you prefer Loose Leaf or Sachets, our tea comes in a
                variety of blends and brew methods
                <div>
                  <NavLink to="/products">
                    <Button
                      style={{
                        backgroundColor: "grey",
                        border: "0px",
                        opacity: "0.6",
                        fontSize: "20px"
                      }}
                    >
                      DISCOVER THE COLLECTION
                      <i
                        className="fas fa-leaf"
                        style={{ color: "rgb(155, 166, 87)", padding: "6px" }}
                      />
                    </Button>
                  </NavLink>
                </div>
              </Card.Text>
            </Card.ImgOverlay>
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
