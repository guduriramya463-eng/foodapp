import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Milkshakes(){

const milkshakes = [
{
id: 401,
name: "Chocolate Milkshake",
description: "Rich and creamy chocolate milkshake topped with whipped cream.",
price: 120,
image: "Chocolate-Milkshake.jpg"
},
{
id: 402,
name: "Strawberry Milkshake",
description: "Fresh strawberries blended with milk and ice cream for a fruity delight.",
price: 110,
image: "strawberry.jpg"
},
{
id: 403,
name: "Vanilla Milkshake",
description: "Classic vanilla milkshake with a smooth, creamy texture.",
price: 100,
image: "vanilla-milkshake.jpg"
},
{
id: 404,
name: "Banana Milkshake",
description: "Sweet bananas blended with milk and ice cream for a tropical taste.",
price: 115,
image: "Banana-Milkshake.jpg"
},
{
id: 405,
name: "Oreo Milkshake",
description: "Crunchy Oreo cookies mixed with milk and ice cream for chocolatey goodness.",
price: 130,
image: "oreo-shake.avif"
},
{
id: 406,
name: "Mango Milkshake",
description: "Fresh ripe mangoes blended with chilled milk for a sweet summer delight.",
price: 125,
image: "mango-milkshake.jpg"
},
{
id: 407,
name: "Butterscotch Milkshake",
description: "Creamy butterscotch flavor blended with milk and topped with caramel drizzle.",
price: 120,
image: "Butterscotch.jpg"
},
{
id: 408,
name: "Pista Milkshake",
description: "Rich pistachio flavored milkshake with dry fruit toppings.",
price: 135,
image: "pista.jpg"
},
];

const itemsPerPage = 4;
const totalPages = Math.ceil(milkshakes.length / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = milkshakes.slice(indexOfFirstItem, indexOfLastItem);

let dispatch = useDispatch();

return (
<>
<ToastContainer position="top-right" autoClose={2000}/>

<div className="milk-container">
<h1> Our Milkshakes🥤 Menu</h1>

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

export default Milkshakes;