import React, { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelsubmit(e) {
    e.preventDefault();

    if (!description) return;

    const datasets = { description, quantity, packed: false, id: Date.now() };

    console.log(datasets);

    onAddItems(datasets);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handelsubmit}>
      <h3>what do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="items..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>ADD</button>
    </form>
  );
}
