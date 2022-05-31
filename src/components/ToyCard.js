import React from "react";

function ToyCard( { toy, onDelete, onLike } ) {

  function deleteCallback() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {method: 'DELETE'})
      .then(r => r.json())
      .then(() => onDelete(toy))
  }

  function likeCallback() {
    const config = {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({likes: toy.likes + 1})
    }
    fetch(`http://localhost:3001/toys/${toy.id}`, config)
      .then(r => r.json())
      .then(t => onLike(t))
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
      <button className="like-btn" onClick={likeCallback}>Like</button>
      <button className="del-btn" onClick={deleteCallback}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
