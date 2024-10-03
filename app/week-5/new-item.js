// Indicates to Next.js server that client-side JS is being used
"use client";

// Imports useState hook from React
import { useState } from "react";

// Component will count number of new items added by user
export default function NewItem() {
    // Name
    const [name, setName] = useState("");

    // Quantity
    const [quantity, setQuantity] = useState(1);

    // Category
    const [category, setCategory] = useState("produce");

    // Function to increment quantity of new items
    function Increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    // Function to decrement quantity of new items
    function Decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    // Form submission handler
    function handleSubmit(event) {
        event.preventDefault();
        let item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    // Returns JSX elements for user interface
    return (
        // Form element
        <form className="flex flex-col items-center space-x-4">
            {/* Name input field */}
            <div className="mb-10">
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                    className="ml-4 py-2 border rounded w-64 text-center"
                    required
                />
            </div>

            {/* Category dropdown */}
            <div>
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="mb-10 py-2 border rounded w-64 text-center"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Item counter */}
            <div className="flex items-center space-x-4">
                <button 
                    type="button"
                    onClick={Decrement} 
                    disabled={quantity === 1} 
                    className={
                        `px-4 py-2 border rounded 
                        ${quantity === 1 ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
                    }
                >
                    -
                </button>
                <span className="text-lg text-sky-100 w-4 text-center">{quantity}</span>
                <button 
                    type="button"
                    onClick={Increment} 
                    disabled={quantity === 20} 
                    className={
                        `px-4 py-2 border rounded 
                        ${quantity === 20 ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
                    }
                >
                    +
                </button>
            </div>

            {/* Submit button */}
            <div>
                <button 
                    type="submit"
                    onClick={handleSubmit} 
                    className="mt-10 px-4 py-2 bg-sky-100 text-black rounded"
                >
                    Add Item
                </button>
            </div>
        </form>
    );
}