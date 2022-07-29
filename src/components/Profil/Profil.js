import React from "react";

function Profil({ user }) {

  return (
    <div className='profil-container'>
      <h1>Bonjour {user?.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

    </div>
  );
}

export default Profil;
