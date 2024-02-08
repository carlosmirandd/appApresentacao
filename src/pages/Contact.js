import React from "react";
import { Card } from "react-bootstrap";
import "./Aplicativo.css";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div className="d-flex flex-row">
      {" "}
      <Card className="container alert-primary m-4">
        <div className="img-container">
          <img
            style={{ width: "100%" }}
            alt="profile-img"
            src={require("../assets/diogo.jpg")}
          />
          <br />
        </div>
        <div className="description">
          <div class="alert alert-danger m-4" role="alert">
            <p class="text-sm-start">Meu número de contato é:</p>
            <p class="text-sm-start">
              <a href="">
                <Button variant="dark"> 4002-8922</Button>
              </a>{" "}
            </p>
            <p class="text-sm-start"></p>
          </div>
        </div>
      </Card>{" "}
    </div>
  );
}
