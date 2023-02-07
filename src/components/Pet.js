import React, {useState} from "react";

function Pet({name, gender, weight, type, age}) {
  const [isAdopted, setIsAdopted] = useState(false)

  function handleClick(event) {
    setIsAdopted(true)
  }

  const adoptBtnText = isAdopted ? "ui disabled button" : "ui primary button"
  const alreadyAdoptedText = !isAdopted ? "ui disabled button" : "ui primary button"

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {name} {gender === 'male' ? '♂' : '♀'}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button 
          className={alreadyAdoptedText}>Already adopted</button>
        <button 
          className={adoptBtnText}
          onClick={handleClick}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
