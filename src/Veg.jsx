import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Veg() {

  const vegItems = [
    {
      id: 101,
      name: "Paneer Butter Masala",
      price: 220,
      description: "Creamy tomato-based curry with soft paneer cubes and Indian spices.",
      image: "paneerbuttermasala.png"
    },
    {
      id: 102,
      name: "Veg Biryani",
      price: 180,
      description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
      image: "veg-biryani.webp"
    },
    {
      id: 103,
      name: "Palak Paneer",
      price: 200,
      description: "Spinach gravy blended with fresh paneer cubes.",
      image: "palakpaneer.webp"
    },
    {
      id: 104,
      name: "Veg Fried Rice",
      price: 210,
      description: "Delicious fried rice with fresh vegetables and spices.",
      image: "Veg fried rice recipe.JPG"
    },
    {
      id: 105,
      name: "Aloo Gobi",
      price: 160,
      description: "Classic dry curry made with potatoes and cauliflower.",
      image: "Aloo-Gobi-Recipe.jpg"
    },
    {
      id: 106,
      name: "Chole Masala",
      price: 170,
      description: "Spicy and flavorful chickpea curry cooked with traditional Indian spices.",
      image: "chole masala.jpg"
    },
    {
      id: 107,
      name: "Mushroom Curry",
      price: 190,
      description: "Fresh mushrooms cooked in rich onion-tomato gravy.",
      image: "mushroom.jpg"
    },
    {
      id: 108,
      name: "Dal Tadka",
      price: 150,
      description: "Yellow lentils tempered with ghee, garlic, and Indian spices.",
      image: "Dal-Tadka.jpg"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);

  let dispatch = useDispatch();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="vegetarian-container">
        <h1>Our Vegetarian 🌿 Menu</h1>

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

export default Veg;