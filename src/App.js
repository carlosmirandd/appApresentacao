import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Aplicativos from "./pages/Aplicativos";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";

export default function App() {
  let styles = useStyles();
  return (
    <div className={styles.container}>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/aplicativos" element={<Aplicativos />} />
        </Routes>
      </Router>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
