import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { useSavings } from '../model/useSavings'
import { CategoryTabs } from './CategoryTabs'
import { ProductCompare } from './ProductCompare'

export function SavingsSection() {
    const s = useSavings()

    return (
        <section className="pt-40">
            <Container>
                <SectionTitle className="max-w-120">Насколько выгодно покупать?</SectionTitle>

                <div className="mt-10">
                    <CategoryTabs
                        categories={s.categories}
                        activeId={s.categoryId}
                        onChange={s.selectCategory}
                    />
                </div>

                {s.isEmpty ? (
                    <p className="py-24 text-center text-muted">
                        Товары этой категории скоро появятся
                    </p>
                ) : (
                    <ProductCompare
                        product={s.product}
                        prev={s.prev}
                        next={s.next}
                        onPrev={s.showPrev}
                        onNext={s.showNext}
                    />
                )}
            </Container>
        </section>
    )
}
