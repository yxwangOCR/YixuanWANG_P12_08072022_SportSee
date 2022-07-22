import React from 'react'

function Profil(data) {
    console.log(data)
  return (
      <div>
          <h1>Bonjour FirstName{ data.firstName }</h1>
    </div>
  )
}

export default Profil