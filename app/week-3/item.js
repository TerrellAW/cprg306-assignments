export default function Item(props) {
    return (
        <section className="ml-5 mr-60 border-2 border-slate-800 bg-slate-950">
            <h2 className="text-lg font-semibold text-sky-100">{props.name}</h2>
            <p className="text-sky-100">{props.quantity}</p>
            <p className="text-sky-100">{props.category}</p>
        </section>
    )
}