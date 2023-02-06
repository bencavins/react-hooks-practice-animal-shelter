import React from "react";

function Pet({id, name, type, age, weight, isAdopted, gender, setPets}) {
  function handleClick(event) {
    setPets(prev => prev.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    }))
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {name} {gender === 'female' ? '♀' : '♂'}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight} lbs</p>
        </div>
      </div>
      <div className="extra content" onClick={handleClick}>
        <button className={isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button className={!isAdopted ? "ui primary button" : "ui disabled button"}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
