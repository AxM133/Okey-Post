import { Banner } from '@/shared/ui/Banner'
import { SUBSCRIBE } from '../model/subscribe.data'
import { SubscribeForm } from '@/features/subscribe'

export function SubscribeSection() {
    return (
        <section className="pt-37.5">
            <Banner className="h-62.5">
                <div className="flex h-full items-center gap-30">
                    <h2 className="max-w-120 text-[28px] leading-10 font-bold">{SUBSCRIBE.title}</h2>
                    <SubscribeForm />
                </div>
            </Banner>
        </section>
    )
}
