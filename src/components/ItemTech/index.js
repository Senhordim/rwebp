import React from "react";

import "./style.css";

function ItemTech({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default ItemTech;
