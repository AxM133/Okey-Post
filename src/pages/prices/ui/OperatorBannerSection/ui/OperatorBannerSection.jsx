import { Banner } from '@/shared/ui/Banner'
import { OrderByLinkForm } from '@/features/order-by-link'
import { OPERATOR } from '../model/operator.data'

export function OperatorBannerSection() {
    return (
        <section className="pt-37.5">
            <Banner className="min-h-66">
                <div className="flex items-center py-9.5">
                    <div className="w-119.25 shrink-0">
                        <img src={OPERATOR.image} alt="" />
                    </div>

                    <div className="max-w-211">
                        <h2 className="text-[26px] leading-9 font-bold">{OPERATOR.title}</h2>
                        <div className="mt-6">
                            <OrderByLinkForm />
                        </div>
                    </div>
                </div>
            </Banner>
        </section>
    )
}
