import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Nonveg() {

  const nonvegItems = [
    {
      id: 201,
      name: "Chicken Biryani",
      price: 250,
      description: "Aromatic basmati rice cooked with tender chicken and rich spices.",
      image: "chicken biryani.jpeg"
    },
    {
      id: 202,
      name: "Butter Chicken",
      price: 270,
      description: "Creamy tomato-based curry with juicy chicken pieces.",
      image: "Butter-Chicken.jpg"
    },
    {
      id: 203,
      name: "Mutton Curry",
      price: 320,
      description: "Slow-cooked mutton in spicy and flavorful gravy.",
      image: "muttoncurry.jpg"
    },
    {
      id: 204,
      name: "Chicken 65",
      price: 240,
      description: "Spicy deep-fried chicken starter with South Indian flavors.",
      image: "chicken-65.webp"
    },
    {
      id: 205,
      name: "Prawn Masala",
      price: 300,
      description: "Juicy prawns cooked in spicy onion-tomato gravy with aromatic spices.",
      image: "Prawns-Masala.jpg"
    },
    {
      id: 206,
      name: "Egg Curry",
      price: 180,
      description: "Boiled eggs simmered in rich and flavorful curry sauce.",
      image: "egg-curry.jpg"
    },
    {
      id: 207,
      name: "Chicken Tandoori",
      price: 280,
      description: "Char-grilled chicken marinated in yogurt and traditional Indian spices.",
      image: "Chicken-Tandoori.jpg"
    },
    {
      id: 208,
      name: "Mutton Biryani",
      price: 350,
      description: "Fragrant basmati rice layered with tender mutton and special spices.",
      image: "Mutton-Biryani.jpg"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(nonvegItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nonvegItems.slice(indexOfFirstItem, indexOfLastItem);

  let dispatch = useDispatch();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000}/>

      <div className="nonveg-container">
        <h1>Our Non-Veg🍗 Menu</h1>

        <ol className="food-list">

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

        </ol>

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

export default Nonveg;