import { Container } from '@/shared/ui/Container'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { useFaq } from '../model/useFaq'
import { FaqItem } from './FaqItem'
import { FaqSearch } from './FaqSearch'

export function FaqListSection() {
    const { query, setQuery, groups, openId, toggle } = useFaq()

    return (
        <section className="pt-25">
            <Container>
                <FaqSearch value={query} onChange={setQuery} />

                {groups.length === 0 && (
                    <p className="py-24 text-center text-muted">По вашему запросу ничего не найдено</p>
                )}

                {groups.map((group) => (
                    <div key={group.id} className="mt-30">
                        <SectionTitle>{group.title}</SectionTitle>
                        <div className="mt-7.5 flex flex-col gap-2.5">
                            {group.items.map((item) => (
                                <FaqItem key={item.id} item={item} isOpen={openId === item.id} onToggle={toggle} />
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    )
}
