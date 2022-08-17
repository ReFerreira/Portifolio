import React from "react";

import foto from "../../assets/images/profile.jpg";

import { Perfil } from "./styles";

export default function Profile() {
  return (
    <Perfil>
      <img className="avatar" src={foto} alt="Reinaldo Ferreira" />
      <h1>Reinaldo Ferreira</h1>
      <span>Software Engineer</span>
      <p>Frontend | ReactJs</p>
    </Perfil>
  );
}
