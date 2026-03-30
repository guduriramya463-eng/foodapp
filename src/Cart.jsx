import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeCart} from './CartSlice';
import {ToastContainer , toast } from 'react-toastify';
import { applyCoupon, resetCoupon } from './CouponSlice';
import {QRCode} from "react-qr-code";
import emailjs from '@emailjs/browser';


function Cart() {

    let dispatch = useDispatch();
    let cartItems = useSelector(state => state.cart)
    let [discountPer, setDiscountPer] = useState(0);
    let [input, setInput] = useState("");

    // calculate the total amount
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0);

    // calculate the discount amount
    let discountAmount = (totalAmount * discountPer) / 100;

    // calculate the total amount after discount
    let price = totalAmount - discountAmount;

    // calculate gst
    let gst = (price * 18) / 100;

    // calculate final amount
    let finalAmount = price + gst;

    // coupon logic
    let {code, applied, discount, message} = 
        useSelector(globalState => globalState.coupon);

    let listItems = cartItems.map(item => (
        <li key={item.id}>
            <h3>Name={item.name}</h3>
            <p>Quantity={item.quantity}</p> 
            <p>price={item.price}</p>
            <img src={item.image} alt={item.name}/>
            
            <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>

            <button onClick={() => {
                dispatch(removeCart(item));
                toast.error(`${item.name} removed from your cart successfully`);
                if (cartItems.length === 1) {
                  dispatch(resetCoupon());
                }
            }}>
              Remove
            </button>

            <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
        </li>
    ))

    // calculate discount of coupon
    let disAmount = discount / 100 * totalAmount;

    // final amount to be paid
    let amountToBePaid = (finalAmount - disAmount);

    const [isCheckout, setIsCheckout] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [customerEmail,SetCustomerEmail] = useState("");

  let templateparams={
    order_id:"ORDER123",
    orders:cartItems.map(item=>({

      name:item.name,
      price:(item.price*item.quantity).toFixed(2),
      units:item.quantity,
      image:item.image
    })),
    cost:{
      shipping:10,
      tax:gst.toFixed(2),
      total:amountToBePaid.toFixed(2)
    },
    email:customerEmail
};
   
let handleCheckout = () => {

  if (!customerEmail) {
    alert("Please enter your email");
    return;
  }
else{
  emailjs.send(
    "service_qw0symo",
   "template_crx84re",
    templateparams,
    "ZgADmKSi0CyoQtuTJ"
  )
  .then(() => {
    alert("Email sent successfully");
  })
  .catch((error) => {
    alert("Email sending failed");
  });
}
};
/* ---------------- PLACE ORDER ---------------- */

   const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully 🎉");
    dispatch(clearCart());
  };


  return (
    <>
    <div className="cart-container">

      <ToastContainer position="top-right" autoClose={2000} />

    
      
          <button
            className="clear-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(resetCoupon());
            }}
          >
            Clear Cart
          </button>

          <ol className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">

                <div className="item-info">
                  <strong>{item.name}</strong>
                  <p>₹{item.price}</p>
                </div>

                <div className="quantity-control">
                  <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => {
                    dispatch(removeCart(item));
                    toast.error(`${item.name} removed from your cart successfully`);
                    if (cartItems.length === 1) {
                      dispatch(resetCoupon());
                    }
                  }}>
                  Remove
                </button>

              </li>
            ))}
          </ol>

          <div className="summary">

            <h3>Total Amount: ₹{totalAmount}</h3>

            <div className="discount-buttons">
              <button onClick={() => setDiscountPer(10)}>10%</button>
              <button onClick={() => setDiscountPer(20)}>20%</button>
              <button onClick={() => setDiscountPer(30)}>30%</button>
              <button onClick={() => setDiscountPer(0)}>Reset</button>
              <h3> Discount ({discountPer}%): {discountAmount}</h3>
            </div>

            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={() => dispatch(applyCoupon(input))}>
                Apply
              </button>
              {applied && (<h3>Coupon Discount: {disAmount}</h3>)}
            </div>

            <h3>GST (18%): ₹{gst}</h3>
            <h2>Final Amount: ₹{amountToBePaid}</h2>
            
            {!isCheckout && (
              <button
                className="checkout-btn"
                onClick={() => setIsCheckout(true)}>
                Proceed to Checkout
              </button>
            )}

            {isCheckout && (
              <div className="payment-section">

                <h3>Select Payment Method</h3>

                <button onClick={() => setPaymentMethod("Card")}>
                  Card
                </button>

                <button onClick={() => setPaymentMethod("QR")}>
                  UPI QR
                </button>

                {paymentMethod === "QR" && (
                  <div className="qr-box">
                    <h4>Scan to Pay ₹{amountToBePaid}</h4>
                    <QRCode value={`upi://guduriramya463-3@okaxis=${amountToBePaid}`} />
                  </div>
                )}

                {paymentMethod === "Card" && (
                  <p>Card payment not available</p>
                )}
               
              </div>
          
            )}
            <div>
              <label>Enter your Gmail to receive order confirmation</label>
          <input
          type="email"
          value={customerEmail}
          onChange={(e)=>SetCustomerEmail(e.target.value)}
          placeholder="You@example.com"/>
        </div>
        <button onClick={handleCheckout}>Checkout & Send Email</button> 
            </div>
          
          
        
      
        <div>
          {cartItems.length === 0 && (
  <h3>🛒 Cart is Empty</h3>
)}
{cartItems.length > 0 && (
  <button onClick={handlePlaceOrder}>
    Place Order
  </button>
)}
    </div>

    </div>
    </>
  );
}

export default Cart;