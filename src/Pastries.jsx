import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Pastries(){

const pastries = [
{
id: 501,
name: "Chocolate Éclair",
description: "Light choux pastry filled with rich chocolate cream and topped with chocolate glaze.",
price: 150,
image: "chocolate-eclair.jpg"
},
{
id: 502,
name: "Strawberry Tart",
description: "Crispy tart base filled with custard and topped with fresh strawberries.",
price: 130,
image: "Strawberry-Tart.jpg"
},
{
id: 503,
name: "Caramel Custard Pastry",
description: "Flaky pastry filled with smooth caramel custard for a sweet delight.",
price: 140,
image: "flan-dessert.jpg"
},
{
id: 504,
name: "Almond Croissant",
description: "Buttery croissant filled with almond paste and topped with sliced almonds.",
price: 160,
image: "almond-croissant.jpg"
},
{
id:505,
name: "Black Forest Pastry",
description: "Chocolate sponge layered with fresh cream and cherries, topped with chocolate shavings.",
price: 170,
image: "blaack-forest.jpg"
},
{
id: 506,
name: "Pineapple Pastry",
description: "Soft vanilla sponge layered with pineapple cream and juicy pineapple chunks.",
price: 140,
image: "pineapple.jpg"
},
{
id: 507,
name: "Red Velvet Pastry",
description: "Moist red velvet cake layered with smooth cream cheese frosting.",
price: 180,
image: "Red-Velvet.png"
},
{
id: 508,
name: "Butterscotch Pastry",
description: "Fluffy vanilla cake layered with butterscotch cream and crunchy caramel bits.",
price: 150,
image: "Butterscotch-pastry.jpg"
}
];

const itemsPerPage = 4;
const totalPages = Math.ceil(pastries.length / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = pastries.slice(indexOfFirstItem, indexOfLastItem);

let dispatch = useDispatch();

return (
<>
<ToastContainer position="top-right" autoClose={2000}/>

<div className="pastry-container">
<h1> Our Pastries🥐 Menu</h1>

<div className="food-list">
{currentItems.map((item) => (
<div key={item.id} className="food-card dessert-card">

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

export default Pastries;