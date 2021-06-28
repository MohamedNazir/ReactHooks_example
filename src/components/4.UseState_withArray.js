import React, { useState } from "react";

export default function UseState_withArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, name: Math.floor(Math.random() * 10 + 1) },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
