export default function Item({ item, onSelect }) {
    return (
        <section 
            onClick={() => onSelect(item)}
            className="ml-5 mr-60 border-2 border-slate-800 bg-slate-950"
        >
            <h2 className="text-lg font-semibold text-sky-100">{item.name}</h2>
            <p className="text-sky-100">{item.quantity}</p>
            <p className="text-sky-100">{item.category}</p>
        </section>
    )
}