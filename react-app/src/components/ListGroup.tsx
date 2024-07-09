import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({items, heading, onSelectItem}:ListGroupProps) {

  const message = items.length == 0 && <p>No item found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {message}
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item,index) => <li
          className = {`list-group-item ${selectedIndex === index && 'active'}`}
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item)
          }}
        >
          {item}
        </li>)}
      </ul>
    </>

  );
}