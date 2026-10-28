import { PromoBanner } from '@/shared/ui/PromoBanner'
import { JOIN } from '../model/join.data'

export function JoinSection({ onAction }) {
    return (
        <section className="pt-45">
            <PromoBanner
                image={JOIN.image}
                title={JOIN.title}
                text={JOIN.text}
                action={JOIN.action}
                onAction={onAction}
                titleClassName="max-w-175 text-[40px] leading-14 font-extrabold"
            />
        </section>
    )
}
