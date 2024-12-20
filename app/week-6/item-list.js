"use client";

import { useState } from "react";

// Import data from items.json file
import items from "./items.json";

// Import Item component for use in ItemList component
import Item from "./item";

// Render list of items
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items by sortBy property, set by buttons
  const sortedItems =
    // If sortBy is "groupCategory", group items by category, else sort with localeCompare
    sortBy === "groupCategory"
      ? Object.entries(
          items.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})
        ).map(([category, items]) => ({
            category,
            items: items.sort((a, b) => (a.name || "").localeCompare(b.name || ""))
          }))
      : items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  
  return (
    <div>
      <button 
        type="button"
        onClick = {() => setSortBy("name")}
        disabled={sortBy === "name"}
        className={
          `px-4 py-2 border rounded
          ${sortBy === "name" ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
        }
      >
        Name
      </button>
      <button
        type="button"
        onClick={() => setSortBy("category")}
        disabled={sortBy === "category"}
        className={
          `px-4 py-2 border rounded
          ${sortBy === "category" ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
        }
      >
        Category
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}