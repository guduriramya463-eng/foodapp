import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Desserts() {

  const dessertItems = [
    {
      id: 301,
      name: "Gulab Jamun",
      price: 80,
      description: "Soft, spongy milk dumplings soaked in sugar syrup.",
      image: "gulabjamun.jpg"
    },
    {
      id: 302,
      name: "Rasgulla",
      price: 70,
      description: "Spongy cheese balls soaked in light sugar syrup.",
      image: "rasgullaa.png"
    },
    {
      id: 303,
      name: "Kheer",
      price: 90,
      description: "Creamy rice pudding flavored with cardamom and nuts.",
      image: "kheerrr.jpg"
    },
    {
      id: 304,
      name: "Chocolate Brownie",
      price: 120,
      description: "Rich chocolate brownie with a gooey center.",
      image: "Chocolate-Brownie.jpg"
    },
    {
      id: 305,
      name: "Rasmalai",
      price: 90,
      description: "Soft paneer patties soaked in sweetened, flavored milk with a hint of cardamom and saffron.",
      image: "rasmalai.jpg"
    },
    {
      id: 306,
      name: "Jalebi",
      price: 60,
      description: "Crispy spiral-shaped sweet soaked in saffron sugar syrup.",
      image: "jalebi.jpg"
    },
    {
      id: 307,
      name: "Carrot Halwa",
      price: 95,
      description: "Traditional Indian sweet made with grated carrots, milk, and dry fruits.",
      image: "carrot.jpg"
    },
    {
      id: 308,
      name: "Ladoo",
      price: 70,
      description: "Sweet round balls made with flour, ghee, and sugar.",
      image: "laddu.png"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(dessertItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dessertItems.slice(indexOfFirstItem, indexOfLastItem);

  let dispatch = useDispatch();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000}/>

      <div className="dessert-container">
        <h1> Our Desserts 🍨 Menu</h1>

        <ul className="food-list">
          {currentItems.map((item) => (
            <li key={item.id} className="food-card">

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

            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
                            style={{ background: "black", color: "white", margin: "5px", padding: "10px 15px" }}

            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </>
  );
}

export default Desserts;