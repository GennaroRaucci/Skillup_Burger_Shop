import React, { useState } from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png"; 

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (itemNum) => {
    const existingItem = cart.find((item) => item.itemNum === itemNum);
  
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.itemNum === itemNum ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart, () => {
        //console.log(`Adding item ${itemNum} to cart`);
      });
    } else {
      setCart((prevCart) => [...prevCart, { itemNum, quantity: 1 }], () => {
        //console.log(`Adding item ${itemNum} to cart`);
      });
    }
  }


  const menuItems = [
    { itemNum: 1, name: "Cheese Burger", price: 14.99, image: burger1, handler: addToCartHandler},
    { itemNum: 2, name: "Veg Cheese Burger", price: 9.99, image: burger2, handler: addToCartHandler, delay: 0.1 },
    { itemNum: 3, name: "Cheese Burger with Fries", price: 11.99, image: burger3, handler: addToCartHandler, delay: 0.2 }
  ];

  return (
    <div>
      <h2>LA NOSTRA SCELTA</h2>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuCard key={item.itemNum} {...item} />
          ))}
      </div>
    </div>
  );
};

export default Menu;
