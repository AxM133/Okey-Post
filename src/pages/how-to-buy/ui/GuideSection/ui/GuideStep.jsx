import { RichText } from '@/shared/ui/RichText'

export function GuideStep({ index, step }) {
    const number = String(index + 1).padStart(2, '0')

    return (
        <div className="grid grid-cols-[300px_1fr] gap-x-17.75">
            <img src={step.image} alt="" className="size-75" />

            <div>
                <div className="flex items-start">
                    <span className="w-31 text-[56px] leading-14 font-light text-primary">{number}</span>
                    <h3 className="max-w-100 border-l border-line pl-8 text-xl leading-9 font-bold">
                        {step.title}
                    </h3>
                </div>

                <div className="mt-3 flex max-w-257 flex-col gap-4">
                    {step.paragraphs.map((parts, i) => (
                        <p key={i} className="text-base leading-9 font-light">
                            <RichText parts={parts} />
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
