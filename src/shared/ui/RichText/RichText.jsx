// parts: массив из строк и объектов { accent } (зелёное выделение) или { bold } (жирный)
export function RichText({ parts }) {
    return parts.map((part, i) => {
        if (typeof part === 'string') return part
        if (part.accent) {
            return (
                <span key={i} className="font-semibold text-primary">
                    {part.accent}
                </span>
            )
        }
        return (
            <b key={i} className="font-bold">
                {part.bold}
            </b>
        )
    })
}
