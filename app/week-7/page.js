"use client";

import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const existingIds = items.map((item) => item.id);

    return (
        <main className="bg-slate-800 min-h-screen">
            <h1 className="text-2xl font-semibold text-sky-100 p-10 text-center">Week 7</h1>
            <NewItem onAddItem={handleAddItem} existingIds={existingIds} />
            <ItemList items={items} />
        </main>
    );
}