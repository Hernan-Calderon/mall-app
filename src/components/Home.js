import React from "react";

import restaurante_1 from "../images/restaurante_1.png";
import restaurante_2 from "../images/restaurante_2.png";
import restaurante_3 from "../images/restaurante_3.png";
import restaurante_4 from "../images/restaurante_4.png";
import tuLoPides from "../images/TuLoPides.png";

import Barra from "./Barra";
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
        <br></br>
        <div className="row" style={{ background: "#FEEFEC" }}>
          <h5>
            A través de esta aplicación podrás realizar el pedido de tu comida
            favorita en cualquiera de los restaurantes del Mall de comidas.
          </h5>
        </div>
        <br></br>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={restaurante_1}
                className="card-img-top"
                alt="Restaurante 1"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurante 1</h5>
                <p className="card-text">
                  Comida rápida japonesa. Disfrute de la experiencia de ver su
                  comida recién cocinada en nuestras planchas teppanyaki.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://tulopides-restaurante-1.netlify.app/"
                  className="btn btnPurple"
                >
                  Ir al Restaurante
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={restaurante_2}
                className="card-img-top"
                alt="Restaurante 2"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurante 2</h5>
                <p className="card-text">
                  Comida rápida estadounidense. Nuestros principales productos
                  son las hamburguesas, las patatas fritas, los menús para el
                  desayuno y los refrescos.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://tulopides-restaurante-2.netlify.app/"
                  className="btn btnPurple"
                >
                  Ir al Restaurante
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={restaurante_3}
                className="card-img-top"
                alt="Restaurante 3"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurante 3</h5>
                <p className="card-text">
                  Comida rápida italiana, especializada en la elaboración de
                  pizzas.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://tulopides-restaurante-3.netlify.app/"
                  className="btn btnPurple"
                >
                  Ir al Restaurante
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={restaurante_4}
                className="card-img-top"
                alt="Restaurante 4"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurante 4</h5>
                <p className="card-text">
                  Comida rápida especializada en pollo frito. Disfrute de piezas
                  de pollo crujientes que se preparan mediante fritura a
                  presión.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://tulopides-restaurante-4.netlify.app/"
                  className="btn btnPurple"
                >
                  Ir al Restaurante
                </a>
              </div>
            </div>
          </div>
        </div>

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
              <p className="mb-0">Mall de Comidas</p>
              <p className="mb-0">Teléfono: 789456123</p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <p className="h5">Mall</p>
              <br></br>
              <div className="row">
                <div className="col-12 col-sm-4 mb-4">
                  <a
                    href="https://tulopides-wokexpress.netlify.app"
                    className="linkExterno"
                  >
                    Restaurante 1
                  </a>
                  <br></br>
                  <a
                    href="https://tulopides-wokexpress.netlify.app"
                    className="linkExterno"
                  >
                    Restaurante 2
                  </a>
                  <br></br>
                  <a
                    href="https://tulopides-wokexpress.netlify.app"
                    className="linkExterno"
                  >
                    Restaurante 3
                  </a>
                  <br></br>
                  <a
                    href="https://tulopides-wokexpress.netlify.app"
                    className="linkExterno"
                  >
                    Restaurante 4
                  </a>
                </div>
                <div className="col-12 col-sm-4 mb-4"></div>
                <div className="col-12 col-sm-4 mb-4"></div>
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
