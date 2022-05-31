import React from "react";

function ToyCard( { toy, onDelete } ) {

  function deleteCallback() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {method: 'DELETE'})
      .then(r => r.json())
      .then(() => onDelete(toy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Likes {toy.likes}</button>
      <button className="del-btn" onClick={deleteCallback}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
