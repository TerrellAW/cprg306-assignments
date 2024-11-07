export default function Item({ key, name, quantity, category, onSelect }) {
    return (
        <section 
            onClick={() => onSelect(key)}
            className="ml-5 mr-60 border-2 border-slate-800 bg-slate-950"
        >
            <h2 className="text-lg font-semibold text-sky-100">{name}</h2>
            <p className="text-sky-100">{quantity}</p>
            <p className="text-sky-100">{category}</p>
        </section>
    )
}