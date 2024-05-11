import React, { useState } from "react";
import { LogoImage } from "./LogoImage";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { PackingList } from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggelCheackBox(id) {
    setItems((items) => {
      return items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item));
    });
  }

  function handelclearBoutton() {
    const confirmed = window.confirm("Are you sure you want delete all items?!");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <LogoImage />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        handelToggelCheackBox={handelToggelCheackBox}
        handelclearBoutton={handelclearBoutton}
      />
      <Stats items={items} />
    </div>
  );
}
