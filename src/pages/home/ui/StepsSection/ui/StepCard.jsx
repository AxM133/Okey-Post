import { RichText } from '@/shared/ui/RichText'

export function StepCard({ step }) {
    return (
        <div>
            <img src={step.image} alt="" className="size-70" />
            <h3 className="mt-4 text-lg leading-6 font-bold uppercase">{step.title}</h3>
            <p className="mt-2 pr-6 text-sm leading-[30px] font-light">
                <RichText parts={step.parts} />
            </p>
        </div>
    )
}
