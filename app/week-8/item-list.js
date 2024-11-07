"use client";

import { useMemo, useState } from "react";

// Import Item component for use in ItemList component
import Item from "./item";

// Render list of items
export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = useMemo(() => {
    // If sortBy is "groupCategory", group items by category, else sort with localeCompare
    if (sortBy === "groupCategory") {
      return Object.entries(
          items.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})
        ).map(([category, items]) => ({
            category,
            items: [...items].sort((a, b) => (a.name || "").localeCompare(b.name || ""))
          }));
    }
    else{
      return [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }
  }, [items, sortBy]);

  return (
    <div className="ml-10">
      <button 
        type="button"
        onClick = {() => setSortBy("name")}
        disabled={sortBy === "name"}
        className={
          `px-4 py-2 border rounded p-4 mb-4
          ${sortBy === "name" ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
        }
      >
        Name
      </button>
      <button
        type="button"
        onClick={() => setSortBy("groupCategory")}
        disabled={sortBy === "groupCategory"}
        className={
          `px-4 py-2 border rounded p-4 mb-4
          ${sortBy === "groupCategory" ? 'text-gray-500 border-gray-500' : 'text-sky-100 border-sky-100'}`
        }
      >
        Category
      </button>
      {sortBy === "groupCategory" ? (
        sortedItems.map((group, index) => (
          <div key={index}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item, index) => (
                <li 
                  onClick={() => onItemSelect(item)}
                  key={index}
                >
                  <Item key={item.key} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item, index) => (
            <li 
              onClick={() => onItemSelect(item)}
              key={index}
            >
              <Item key={item.key} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}