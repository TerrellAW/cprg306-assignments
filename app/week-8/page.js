"use client";

import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        setSelectedItemName(item.name.split(",")[0]);
    };

    const existingIds = items.map((item) => item.id);

    return (
        <main className="bg-slate-800 min-h-screen">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold text-sky-100 p-10 text-center">Week 8</h1>   
                <div className="flex flex-col lg:flex-row gap-6">
                    <NewItem onAddItem={handleAddItem} existingIds={existingIds} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-full lg:w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}