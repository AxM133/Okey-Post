import arrow from '@/shared/assets/arrow.svg'
import ru from '@/pages/home/assets/flags/ru.svg'
import uk from '@/pages/home/assets/flags/uk.svg'
import { PriceCard } from './PriceCard'

export function ProductCompare({ product, prev, next, onPrev, onNext }) {
    return (
        <div className="mt-14">
            <div className="grid grid-cols-[400px_1fr_400px] items-start">
                <div className="pt-16">
                    <h3 className="text-2xl leading-9 font-bold">{product.name}</h3>
                    <div className="mt-11">
                        <PriceCard flag={ru} label="Цена в России" value={product.priceRu} />
                    </div>
                </div>

                <div className="mx-auto flex size-111.5 items-center justify-center rounded-full bg-soft">
                    <img src={product.image} alt={product.name} className="max-h-full" />
                </div>

                <div className="pt-16">
                    <h3 className="text-2xl leading-9 font-bold">
                        Доставка одежды из Великобритании от{' '}
                        <span className="text-primary">{product.deliveryFrom}</span>
                    </h3>
                    <div className="mt-11">
                        <PriceCard flag={uk} label="Цена в UK" value={product.priceUk} accent />
                    </div>
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-9">
                    <img src={prev.image} alt="" className="size-30 rounded-full bg-soft" />
                    <button type="button" onClick={onPrev} aria-label="Предыдущий товар" className="cursor-pointer">
                        <img src={arrow} alt="" className="rotate-180" />
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-base text-muted">Срок доставки примерно {product.days} дней</p>
                    <p className="mt-1 text-[28px] font-bold">
                        Вы экономите до <span className="text-primary">{product.savings}</span>
                    </p>
                </div>

                <div className="flex items-center gap-9">
                    <button type="button" onClick={onNext} aria-label="Следующий товар" className="cursor-pointer">
                        <img src={arrow} alt="" />
                    </button>
                    <img src={next.image} alt="" className="size-30 rounded-full bg-soft" />
                </div>
            </div>
        </div>
    )
}
