import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Starter(){

const starters = [
{
  id: 701,
  name: "Paneer Tikka",
  type: "veg",
  price: 220,
  description: "Grilled paneer cubes marinated in spiced yogurt.",
  image: "paneer-tikka.jpg"
},
{
  id: 702,
  name: "Chicken 65",
  type: "nonveg",
  price: 240,
  description: "Spicy deep-fried chicken tossed with curry leaves.",
  image: "chicken-tikka.jpg"
},
{
  id: 703,
  name: "Gobi Manchurian",
  type: "veg",
  price: 180,
  description: "Crispy cauliflower tossed in spicy sauce.",
  image: "gobi-manchurian.jpg"
},
{
  id: 704,
  name: "Fish Fry",
  type: "nonveg",
  price: 280,
  description: "Marinated fish shallow fried with traditional spices.",
  image: "fishfry copy.jpg"
},
{
  id: 705,
  name: "Chicken Tikka",
  type: "nonveg",
  price: 260,
  description: "Boneless chicken grilled in tandoor.",
  image: "chicken-tikkaa.jpg"
},
{
  id: 706,
  name: "Hara Bhara Kabab",
  type: "veg",
  price: 170,
  description: "Spinach and green pea patties shallow fried.",
  image: "harabara.jpg"
},
{
  id: 707,
  name: "Prawn Fry",
  type: "nonveg",
  price: 320,
  description: "Juicy prawns fried with garlic and spices.",
  image: "prawn-fry-.jpg"
},
{
  id: 708,
  name: "Chilli Paneer",
  type: "veg",
  price: 230,
  description: "Paneer cubes sautéed in spicy Indo-Chinese sauce.",
  image: "chilli-paneer.jpg"
}
];

const itemsPerPage = 4;
const totalPages = Math.ceil(starters.length / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = starters.slice(indexOfFirstItem, indexOfLastItem);

let dispatch = useDispatch();

return (
<>
<ToastContainer position="top-right" autoClose={2000}/>

<div className="starter-container">

<h1>Our Starters🍢 Menu</h1>

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

export default Starter;