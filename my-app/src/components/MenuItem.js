import React from "react";
import "./MenuItem.css"; 

function MenuItem({ title, description, image, price, quantity, onAdd, onRemove }) {
  return (
    <div className="menu-item d-flex align-items-center">
      <img src={image} alt={title} className="menu-img" />
      <div className="menu-details flex-grow-1">
        <h5>{title}</h5>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button className="btn btn-outline-secondary mx-1" onClick={onRemove} disabled={quantity === 0}>⊖</button>
        <span>{quantity}</span>
        <button className="btn btn-outline-primary mx-1" onClick={onAdd}>⊕</button>
      </div>
    </div>
  );
}

export default MenuItem;
