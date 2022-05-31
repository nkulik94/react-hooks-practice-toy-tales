import React, { useState } from "react";

function ToyForm( { onAddToy } ) {
  const [toyForm, updateForm] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleSubmit(e) {
    e.preventDefault()
    onAddToy(toyForm)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyForm.name}
          onChange={e => updateForm({...toyForm, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyForm.image}
          onChange={e => updateForm({...toyForm, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
