import React from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, handelToggelCheackBox, handelclearBoutton }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} handelToggelCheackBox={handelToggelCheackBox} key={item.id} />
          ))}
        </ul>
      </div>
      <button onClick={handelclearBoutton}>Clear PackingList</button>
    </>
  );
}
