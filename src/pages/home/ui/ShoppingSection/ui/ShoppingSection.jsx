import { PromoBanner } from '@/shared/ui/PromoBanner'
import { useShopping } from '../model/useShopping'

export function ShoppingSection() {
    const { image, title, text, action, onAction } = useShopping()

    return (
        <section className="pt-40">
            <PromoBanner
                image={image}
                title={title}
                text={text}
                action={action}
                onAction={onAction}
                titleClassName="text-[28px] leading-10 font-bold"
            />
        </section>
    )
}
