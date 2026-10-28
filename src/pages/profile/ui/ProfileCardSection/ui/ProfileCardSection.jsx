import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { useProfileCard } from '../model/useProfileCard'

export function ProfileCardSection() {
    const { photo, rows, editLabel, passwordLabel } = useProfileCard()

    return (
        <section className="pt-20">
            <Container wide>
                <div className="flex gap-16 rounded-2xl bg-white p-7 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
                    <img src={photo} alt="" className="size-82.5 shrink-0 rounded-lg object-cover" />

                    <div className="pt-1">
                        <dl className="grid grid-cols-[120px_1fr] gap-y-5 text-base">
                            {rows.map(({ label, value }) => (
                                <div key={label} className="contents">
                                    <dt className="font-bold">{label}</dt>
                                    <dd className="font-light">{value}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-8 flex items-center gap-7">
                            <Button className="w-40">{editLabel}</Button>
                            <a href="#" className="border-b border-dashed border-primary text-xs font-medium text-primary">
                                {passwordLabel}
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
