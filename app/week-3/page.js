import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-slate-800">
            <h1 className="text-2xl font-semibold text-sky-100">Shopping List</h1>
            <ItemList/>
        </main>
    );
}