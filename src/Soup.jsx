import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Soup() {

const soup = [
{
  id: 901,
  name: "Tomato Soup",
  type: "veg",
  price: 120,
  description: "Fresh tomato soup seasoned with herbs and served hot.",
  image: "tomatosoup.webp"
},
{
  id: 902,
  name: "Sweet Corn Soup",
  type: "veg",
  price: 130,
  description: "Classic sweet corn soup with crunchy vegetables.",
  image: "Corn-Soup.jpg"
},
{
  id: 903,
  name: "Manchow Soup",
  type: "veg",
  price: 140,
  description: "Spicy Indo-Chinese soup topped with crispy noodles.",
  image: "Manchow-Soup.jpg"
},
{
  id: 904,
  name: "Hot & Sour Soup",
  type: "veg",
  price: 150,
  description: "Tangy and spicy soup loaded with vegetables.",
  image: "hot-sour-soup.webp"
},
{
  id: 905,
  name: "Chicken Clear Soup",
  type: "nonveg",
  price: 160,
  description: "Light and healthy chicken broth with herbs.",
  image: "chickensoup.jpg"
},
{
  id: 906,
  name: "Chicken Manchow Soup",
  type: "nonveg",
  price: 170,
  description: "Spicy chicken soup topped with crispy fried noodles.",
  image: "Chicken-Manchow.jpg"
},
{
  id: 907,
  name: "Mutton Soup",
  type: "nonveg",
  price: 190,
  description: "Traditional mutton bone soup rich in flavor.",
  image: "MuttonSoup.jpg"
},
{
  id: 908,
  name: "Prawn Soup",
  type: "nonveg",
  price: 200,
  description: "Delicious prawn soup cooked with mild spices.",
  image: "prawnsoup.jpg"
}
];

const itemsPerPage = 4;
const totalPages = Math.ceil(soup.length / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = soup.slice(indexOfFirstItem, indexOfLastItem);

let dispatch = useDispatch();

return (
<>
<ToastContainer position="top-right" autoClose={2000}/>

<div className="soup-container">

<h1>Our Soups 🍲 Menu</h1>

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

export default Soup;