export function ServiceCard({ service }) {
    return (
        <article>
            <img src={service.image} alt="" className="size-75 object-contain" />
            <h3 className="mt-6 max-w-60 text-xl leading-9 font-bold">{service.title}</h3>
            <p className="mt-3 max-w-75 text-sm leading-9 font-light">{service.text}</p>
            <span className="mt-6 inline-flex h-14 w-45 items-center justify-center rounded-lg bg-brand-to text-sm font-bold text-white">
                {service.price}
            </span>
        </article>
    )
}
