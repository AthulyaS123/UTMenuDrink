import React, { useState } from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
  {
    id: 1,
    title: "Iced Matcha",
    description: "Handmade Iced Matcha with vanilla syrup.",
    image: "my-app/public/matcha.jpg",
    price: 6.0,
  },
  {
    id: 2,
    title: "Caramel Latte",
    description: "Latte with a pump of caramel.",
    image: "my-app/public/Caramel-Latte.jpg",
    price: 7.5,
  },
  {
    id: 3,
    title: "Strawberry Milkshake",
    description: "Milkshake with blended frozen strawberries.",
    image: "my-app/public/strawberrymilkshake.jpg",
    price: 4.25,
  },
  {
    id: 4,
    title: "Hot Chocolate",
    description: "Hot chocolate with marshmallows.",
    image: "my-app/public/hotchoco.jpg",
    price: 4.0,
  },
];

function App() {
  const [cart, setCart] = useState({});

  const handleAdd = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleRemove = (id) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;
      const updatedCart = { ...prevCart };
      updatedCart[id] = prevCart[id] - 1;
      if (updatedCart[id] === 0) delete updatedCart[id];
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce(
      (total, [id, qty]) => total + menuItems.find((item) => item.id === parseInt(id)).price * qty,
      0
    ).toFixed(2);
  };

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert("No items in cart.");
      return;
    }
    const orderSummary = Object.entries(cart)
      .map(([id, qty]) => {
        const item = menuItems.find((item) => item.id === parseInt(id));
        return `${qty} ${item.title}`;
      })
      .join("\n");
    alert(`Order placed!\n\n${orderSummary}\n\nTotal: $${calculateTotal()}`);
  };

  const handleClearCart = () => {
    setCart({});
  };

  return (
    <div className="container">
      <header className="text-center my-4">
        <img src="my-app/public/logoo.png" alt="UT Drinks Logo" className="logo" />
        <h1>UT Drinks</h1>
        <p className="highlight">Refreshing and tasty thirst-quenching treats!</p>
      </header>
      <main className="menu">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            quantity={cart[item.id] || 0}
            onAdd={() => handleAdd(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </main>
      <footer className="cart-summary d-flex justify-content-center align-items-center mt-4">
  <h3 className="me-3">Subtotal: ${calculateTotal()}</h3>
  <button className="btn btn-primary mx-2" onClick={handleOrder}>Order</button>
  <button className="btn btn-secondary mx-2" onClick={handleClearCart}>Clear all</button>
</footer>

    </div>
  );
}

export default App;
