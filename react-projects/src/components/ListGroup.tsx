// import { MouseEvent } from "react";

import { useState } from "react";

// {  items: [], heading:string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Manila"];
  // let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  // if (items.length === 0) {
  //   return <p>No item found</p>;
  // }

  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1 className="text-center">{heading}</h1>
      {/* conditional rendering example */}
      {items.length === 0 && <p className="text-center">No item found</p>}
      <ul className="list-group text-center">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">An item</li>
        <li className="list-group-item">An item</li>
        <li className="list-group-item">An item</li>
        <li className="list-group-item">An item</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
