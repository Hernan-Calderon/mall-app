import React from "react";

import cc from "../images/cc.png";
import logo_1 from "../images/logo_1.png";
import logo_general from "../images/logo_general.png";
import tuLoPides from "../images/TuLoPides.png";

import Titulo from "./Titulo";
import Barra from "./Barra";
import Testimonios from "./Testimonios";
import "../styles/global.css";

function Home() {
  return (
    <div>
      <Barra />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="m-3 d-flex justify-content-center text-danger">
              Mall de Comidas
            </h1>
          </div>
        </div>
        <Titulo imagenTitulo={cc} />
        <br></br>
        <div className="row" style={{ background: "#FEEFEC" }}>
          <h5>
            A través de esta aplicación podrás realizar el pedido de tu comida
            favorita en cualquiera de los restaurantes del Mall de comidas del
            centro comercial Demo Plaza.
          </h5>
        </div>
        <br></br>
        <div className="row">
          <div className="col-6 col-md-4 col-xl-3">
            <a href="https://tulopides.netlify.app">
              <img
                src={logo_1}
                className="img-fluid shadow mb-4"
                alt="Centro comercial"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <img
              src={logo_general}
              className="img-fluid shadow mb-4"
              alt="Centro comercial"
            />
          </div>
        </div>
        <br></br>
        <Testimonios></Testimonios>
        <br></br>
      </div>
      <footer className="bg-danger text-white">
        <div className="container d-flex justify-content-center pt-4">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <img
                src={tuLoPides}
                className="img-fluid"
                alt="Logo restaurante"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <p className="h5">Contacto</p>
              <br></br>
              <p className="mb-0">Centro Comercial Demo Plaza</p>
              <p className="mb-0">Teléfono: 789456123</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <p className="h5">Mall</p>
              <br></br>
              <div className="row">
                <div className="col-12 col-sm-4 mb-4">
                  <a
                    href="https://tulopides.netlify.app"
                    className="linkExterno"
                  >
                    WOK EXPRESS
                  </a>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                  <p className="mb-0">Restaurant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#491632" }}>
          © 2023 Copyright:
          <span>TuLoPides</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
