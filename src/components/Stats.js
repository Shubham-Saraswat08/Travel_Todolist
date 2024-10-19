import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${
              items.length === 0 ? "0.00" : percentage.toFixed(0)
            }%)`}
      </em>
    </footer>
  );
}
