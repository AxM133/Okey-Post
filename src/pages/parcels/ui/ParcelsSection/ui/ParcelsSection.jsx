import { useNavigate } from 'react-router-dom'
import filter from '@/shared/assets/filter.svg'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { ParcelsTable } from '@/entities/parcel'
import { useParcelsSection } from '../model/useParcelsSection'

export function ParcelsSection() {
    const { title, action, parcels } = useParcelsSection()
    const navigate = useNavigate()

    return (
        <section className="pt-17.5">
            <Container wide>
                <div className="flex items-center justify-between">
                    <h1 className="text-[28px] font-bold">{title}</h1>

                    <div className="flex items-center gap-8">
                        <Button onClick={() => navigate(ROUTES.cabinet.createParcel)}>{action}</Button>
                        <button type="button" aria-label="Фильтр" className="flex size-15 cursor-pointer items-center justify-center rounded-full border border-primary">
                            <img src={filter} alt="" />
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <ParcelsTable parcels={parcels} />
                </div>
            </Container>
        </section>
    )
}
