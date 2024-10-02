import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="bg-slate-800 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-sky-100 p-10">Week 5</h1>
            <div>
                <NewItem />
            </div>
        </main>
    );
}