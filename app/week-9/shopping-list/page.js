"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    if (!user) {
        return (
            <main className="bg-slate-800 min-h-screen">
                <h1>Error: Not Logged In</h1>
                <Link href="/week-9" className="text-sky-100 hover:font-bold hover:cursor-pointer">Must log in to view this page</Link>
            </main>
        )
    }

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
                <h1 className="text-2xl font-semibold text-sky-100 p-10 text-center">Week 9</h1>   
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-col w-full">
                        <NewItem onAddItem={handleAddItem} existingIds={existingIds} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    );
}