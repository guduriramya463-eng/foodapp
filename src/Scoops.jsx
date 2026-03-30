import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Scoops() {

  const scoops = [
    {
      id: 801,
      name: "Vanilla Scoop",
      description: "Classic creamy vanilla ice cream made with real vanilla extract.",
      price: 40,
      image: "vanilascoop.webp"
    },
    {
      id: 802,
      name: "Chocolate Scoop",
      description: "Rich and smooth chocolate ice cream with intense cocoa flavor.",
      price: 50,
      image: "chocoscoop.png"
    },
    {
      id: 803,
      name: "Strawberry Scoop",
      description: "Fresh strawberry flavored ice cream with real fruit taste.",
      price: 45,
      image: "strawscoop.jpg"
    },
    {
      id: 804,
      name: "Butterscotch Scoop",
      description: "Creamy butterscotch ice cream with crunchy caramel bits.",
      price: 55,
      image: "Butterscoop.jpg"
    },
    {
      id: 805,
      name: "Mango Scoop",
      description: "Sweet and refreshing mango ice cream made from ripe mangoes.",
      price: 50,
      image: "Mangoscoop.jpg"
    },
    {
      id: 806,
      name: "Black Currant Scoop",
      description: "Tangy black currant flavored ice cream with fruity swirls.",
      price: 60,
      image: "Black-Currant.jpg"
    },
    {
      id: 807,
      name: "Pista Scoop",
      description: "Delicious pistachio ice cream with crunchy nut pieces.",
      price: 60,
      image: "pistascoop.jpg"
    },
    {
      id: 808,
      name: "Cookies & Cream Scoop",
      description: "Creamy vanilla ice cream loaded with crunchy cookie chunks.",
      price: 65,
      image: "creamy-cookies.avif"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(scoops.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = scoops.slice(indexOfFirstItem, indexOfLastItem);

  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="icecream-container">

        <h1>Our Ice Cream Scoops 🍨 Menu</h1>

        <div className="food-list">
          {currentItems.map((item) => (
            <div key={item.id} className="food-card">

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <p className="price">₹{item.price}</p>

              <button
                className="add-btn"
                onClick={() => {
                  dispatch(addToCart(item));
                  toast.success(`${item.name} added to cart successfully!`);
                }}
              >
                Add to Cart
              </button>

            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{ background: "black", color: "white", margin: "5px", padding: "10px 15px" }}

              className={currentPage === index + 1 ? "active-page" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </>
  );
}

export default Scoops;