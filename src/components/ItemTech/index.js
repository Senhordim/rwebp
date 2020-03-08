import React from "react";
import PropTypes from "prop-types";

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

ItemTech.defaultProps = {
  tech: "Oculto"
};

ItemTech.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default ItemTech;
