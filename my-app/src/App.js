import React from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

const menuItems = [
  {
    id: 1,
    title: "Iced Matcha",
    description: "Handmade Iced Matcha with vanilla syrup.",
    image: "/matcha.jpg",
    price: 6.0,
  },
  {
    id: 2,
    title: "Caramel Latte",
    description: "Latte with a pump of caramel.",
    image: "/Caramel-Latte.jpg",
    price: 7.5,
  },
  {
    id: 3,
    title: "Strawberry Milkshake",
    description: "Milkshake with blended frozen strawberries.",
    image: "/strawberrymilkshake.jpg",
    price: 4.25,
  },
  {
    id: 4,
    title: "Hot Chocolate",
    description: "Hot chocolate with marshmallows.",
    image: "/hotchoco.jpg",
    price: 4.0,
  },
];

function App() {
  return (
    <div className="container">
      <header className="text-center my-4">
        <img src="/logoo.png" alt="UT Drinks Logo" className="logo" />
        <h1>UT Drinks</h1>
        <p className="highlight">Refreshing and tasty thirst-quenching treats!</p>
      </header>
      <main className="menu">
        {/* asked chatgpt how to iterate over all the menu items -> suggested .map */}
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </main>
    </div>
  );
}

export default App;