import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, setPets}) {
  return <div className="ui cards">
    {pets.map(pet => {
      return <Pet key={pet.id} {...pet} setPets={setPets} />
    })}
  </div>;
}

export default PetBrowser;
