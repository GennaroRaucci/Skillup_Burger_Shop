import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({itemNum,  value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} id={`prodotto-${itemNum}`}/>
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cheeseBurgerValue, setCheeseBurgerValue] = useState(0);
  const [vegCheeseBurgerValue, setVegCheeseBurgerValue] = useState(0);
  const [friesBurgerValue, setFriesBurgerValue] = useState(0);

  const increment = (itemNum) => {
    if (itemNum === 1) {
      setCheeseBurgerValue((prevValue) => prevValue + 1);
    } else if (itemNum === 2) {
      setVegCheeseBurgerValue((prevValue) => prevValue + 1);
    } else if (itemNum === 3) {
      setFriesBurgerValue((prevValue) => prevValue + 1);
    }
  };

  const decrement = (itemNum) => {
    if (itemNum === 1) {
      setCheeseBurgerValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    } else if (itemNum === 2) {
      setVegCheeseBurgerValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    } else if (itemNum === 3) {
      setFriesBurgerValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    }
  };

  const subtotal = [cheeseBurgerValue, vegCheeseBurgerValue, friesBurgerValue]
  .filter((value) => value > 0)
  .reduce((total, value, index) => total + value * [12, 10, 20][index], 0);
  const iva = subtotal * 0.18;
  const shippingCharges = 5;
  const total = subtotal + iva + shippingCharges;

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cheeseBurgerValue}
          increment={() => increment(1)}
          decrement={() => decrement(1)} 
          itemNum={1}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={vegCheeseBurgerValue}
          increment={() => increment(2)}
          decrement={() => decrement(2)}  
          itemNum={2}
        />
        <CartItem
          title={"Cheese Burger with Fries"}
          img={burger3}
          value={friesBurgerValue}
          increment={() => increment(3)}
          decrement={() => decrement(3)}  
          itemNum={3}
        />
        <article>
          <div>
            <h4>Totale Parziale</h4>
            <p>₹{subtotal}</p>
          </div>
          <div>
            <h4>IVA</h4>
            <p>₹{iva.toFixed(2)}</p>
          </div>
          <div>
            <h4>Costo Spedizione</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Totale</h4>
            <p>₹{total.toFixed(2)}</p>
          </div>
          <Link to="/shipping">Completa Ordine</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
