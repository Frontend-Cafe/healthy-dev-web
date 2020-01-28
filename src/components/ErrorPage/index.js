import React from "react";

import "./styles.scss";

export default function ErrorPage() {
  return (
    <div className="errorContainer">
      <div className="errorContainerGrid">
        <div className="errorContainer-text">
          <h1>Oops!</h1>
          <p>Algo salió mal mostre</p>
        </div>
        <div className="errorContainer-img">
          <img
            alt="error illustration"
            src="https://cidi.cba.gov.ar/portal-publico/assets/img/imagenes-error/error-400.svg"
          />
        </div>
        <button className="errorContainer-btn">Volver atras</button>
      </div>
    </div>
  );
}
