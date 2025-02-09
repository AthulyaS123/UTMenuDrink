import React from "react";

function MenuItem({ title, description, image, price }) {
  return (
    <div className="menu-item">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </div>
      <button>Add</button>
    </div>
  );
}

export default MenuItem;