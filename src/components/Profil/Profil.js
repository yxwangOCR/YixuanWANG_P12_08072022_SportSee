import React from "react";

function Profil({ user }) {
    console.log(user)

  return (
    <div>
      <h1>Bonjour FirstName {user?.firstName}</h1>
    </div>
  );
}

export default Profil;
