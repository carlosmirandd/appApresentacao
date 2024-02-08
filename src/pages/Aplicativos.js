import React from "react";
import { Card } from "react-bootstrap";
import "./Aplicativo.css";
import Button from "react-bootstrap/Button";

const Aplicativos = () => {
  return (
    <div style={{ display: "flex" }} class="alert alert-success">
      <Card className="container" style={{ marginRight: "0.5rem" }}>
        <div className="img-container">
          <img alt="profile-img" src={require("../assets/isac.jpg")} />
        </div>
        <div className="description">
          <p>Nome: Isac Ribeiro</p>

          <p>
            Descrição: me identifico como REX e eu queria estar jogando no
            flamengo....
          </p>
        </div>
      </Card>

      <Card className="container" style={{ marginRight: "0.5rem" }}>
        <div className="img-container">
          <img alt="profile-img" src={require("../assets/diogo.jpg")} />
        </div>
        <div className="description">
          <p>Nome: Diogo Oliveira</p>
          <p>Descrição: me identifico como um ser humano especial.</p>
        </div>
      </Card>

      <Card className="container" style={{ marginRight: "0.5rem" }}>
        <div className="img-container">
          <img alt="profile-img" src={require("../assets/miranda.jpg")} />
        </div>
        <div className="description">
          <p>Nome: Carlos Miranda</p>
          <p className="text">
            Descrição: me identifico como Miranda e quase não passei em redes...
          </p>
        </div>
      </Card>
      <Card className="container" style={{ marginRight: "0.5rem" }}>
        <div className="img-container">
          <img alt="profile-img" src={require("../assets/benevides.jpg")} />
        </div>
        <div className="description" style={{ marginRight: "0.5rem" }}>
          <p>Nome: João Benevides</p>
          <p className="text">
            Descrição: me identifico como petista e não gosto do lula...
          </p>
        </div>
      </Card>
      <Card className="container" style={{ marginRight: "0.5rem" }}>
        <div className="img-container">
          <img alt="profile-img" src={require("../assets/vh.jpg")} />
        </div>
        <div className="description">
          <p>Nome: Vitor Dias</p>
          <p className="text">
            Descrição: me identifico como VH...eu acho que é...
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Aplicativos;
