// Indicates to Next.js server that client-side JS is being used
"use client";

// Imports useState hook from React
import { useState } from "react";

// Component will count number of new items added by user
export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    // Returns JSX elements for user interface
    return (
        <div className="flex items-center space-x-4">
            <button 
                onClick={Decrement} 
                disabled={quantity === 1} 
                className={
                    `px-4 py-2 border rounded 
                    ${quantity === 1 ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
                }
            >
                -
            </button>
            <span className="text-lg text-sky-100">{quantity}</span>
            <button 
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
    );
}