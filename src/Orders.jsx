import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const cartItems = useSelector((state) => state.cart);

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="orders-container">
      <h1>My Orders</h1>

      <div className="order-info">
        <p><strong>Date:</strong> {currentDate}</p>
        <p><strong>Time:</strong> {currentTime}</p>
      </div>

      {cartItems.length === 0 ? (
        <h3>No Orders Yet</h3>
      ) : (
        <ul className="order-list">
          {cartItems.map((item) => (
            <li key={item.id} className="order-item">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;

