import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, updateList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(r => r.json())
      .then(toys => updateList(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleForm(newToy) {
    const config = {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newToy)
    }
    fetch('http://localhost:3001/toys', config)
      .then(r => r.json())
      .then(toy => {
        updateList([...toyList, toy])
        setShowForm(!showForm)
      })
  }

  function handleDelete(t) {
    updateList(toyList.filter(toy => toy.id !== t.id))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toyList} onDelete={handleDelete} />
    </>
  );
}

export default App;
