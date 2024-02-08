import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Home.css";

const About = () => {
  return (
    <div className="d-flex flex-row">
      {" "}
      <div class="alert alert-primary m-4" role="alert">
        <p class="text-sm-start">Opa, meu nome é Diogo Oliveira</p>
        <p class="text-sm-start">
          Tenho 19 anos, moro em Niterói, e estou no 5º período do Curso Técnico
          em Informática no Instituto Federal de Educação, Ciência e Tecnologia
          do Rio de Janeiro, (IFRJ Campus Niterói).
        </p>
      </div>
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
          <p>Nome: Diogo Oliveira</p>
          Descrição:{" "}
          <a href="https://www.youtube.com/watch?v=JjZIW-kJlyc">
            <Button variant="primary">
              {" "}
              Jesus na sua vida e na do Flamengo
            </Button>
          </a>{" "}
          <br />
          <br />
          Jogo bola e gosto de motos
        </div>
      </Card>{" "}
    </div>
  );
};
export default About;
