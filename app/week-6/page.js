import Item from "./item";
import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="bg-slate-800 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-sky-100 p-10">Week 6</h1>
            <ItemList />
        </main>
    );
}