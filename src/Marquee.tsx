import { useState, useEffect } from "react";

export function Marquee() {
  const [items, setItems] = useState([1, 2, 3, 4]);
  const marqueeItems = items.map((i) => (
    <li className="marquee__item" key={i}>
      {i}
    </li>
  ));

  return (
    <section>
      <div className="marquee">
        <ul className="marquee__content">{marqueeItems}</ul>

        {/* Duplicate the content */}
        <ul className="marquee__content" aria-hidden="true">
          {marqueeItems}
        </ul>
      </div>
      <h3>Total number of items {items.length}</h3>
      <button onClick={() => setItems((curr) => [...curr, curr.length + 1])}>
        +
      </button>
      <button onClick={() => setItems((curr) => curr.slice(curr.length - 1))}>
        -
      </button>
    </section>
  );
}
