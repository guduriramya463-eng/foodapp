import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Tiffin() {

  const tiffin = [
    {
      id: 601,
      name: "Idli",
      description: "Soft and fluffy steamed rice cakes served with coconut chutney and sambar.",
      price: 40,
      image: "idli.avif"
    },
    {
      id: 602,
      name: "Dosa",
      description: "Crispy golden dosa served with chutney and hot sambar.",
      price: 60,
      image: "masala-dosa.webp"
    },
    {
      id: 603,
      name: "Poori",
      description: "Deep-fried fluffy poori served with delicious potato curry.",
      price: 70,
      image: "poori.jpeg"
    },
    {
      id: 604,
      name: "Upma",
      description: "Soft and savory semolina upma cooked with vegetables and spices.",
      price: 50,
      image: "upma.jpg"
    },
    {
      id: 605,
      name: "Pongal",
      description: "Traditional South Indian pongal made with rice, dal, and mild spices.",
      price: 65,
      image: "pongal.jpg"
    },
    {
      id: 606,
      name: "Bonda",
      description: "Golden fried potato-stuffed snack with a crispy outer layer, served with chutney.",
      price: 50,
      image: "Bondaa.jpg"
    },
    {
      id: 607,
      name: "Pesarattu",
      description: "Healthy green gram dosa served with ginger chutney and upma filling.",
      price: 70,
      image: "pesarattu.png"
    },
    {
      id: 608,
      name: "Rava Dosa",
      description: "Thin and crispy semolina dosa with onions and spices, served with chutney and sambar.",
      price: 75,
      image: "ravadosa.jpg"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(tiffin.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tiffin.slice(indexOfFirstItem, indexOfLastItem);

  let dispatch = useDispatch();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="tiffin-container">
        <h1>Our Tiffins🍽️ Menu</h1>

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

export default Tiffin;