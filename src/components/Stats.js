import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start addnig some items to your packing list 🚀 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const Percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {Percentage === 100
          ? "You got everything! ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${Percentage}%)`}
      </em>
    </footer>
  );
}
