import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Home.css";

const About = () => {
  return (
    <div className="d-flex flex-row m-4">
      {" "}
      <Card className="container CCCCCCCC" style={{ marginRight: "0.5rem" }}>
        <div className="img-container">
          <img
            style={{ width: "100%" }}
            alt="profile-img"
            src={require("../assets/diogo.jpg")}
          />
          <br />
        </div>
        <p class="text-sm-start">
          Jogo futebol e faço curso para tecnico de informatica
        </p>
        <p class="text-sm-start">
          Ja fiz uns cursos relacionados a Informática e a mecanica de moto
        </p>
        <p class="text-sm-start">
          Eu não namoro e é um ponto muito importante a ser falado sobre mim.
        </p>
        <p class="text-sm-start"></p>
        <p class="text-sm-start">Eu tenho bastante energia positiva.</p>
        <p class="text-sm-start"></p>
        <p class="text-sm-start"></p>
        <div className="description">
          <a href="https://www.youtube.com/watch?v=JjZIW-kJlyc">
            <Button variant="primary"> Jesus é mais</Button>
          </a>{" "}
          <br />
          <br />
        </div>
      </Card>
      <div
        class="alert alert-warning
      "
        role="alert"
      ></div>{" "}
    </div>
  );
};
export default About;
