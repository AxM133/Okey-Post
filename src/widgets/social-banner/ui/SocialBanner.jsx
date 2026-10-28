import { Banner } from '@/shared/ui/Banner'
import { SOCIAL } from '../model/social.data'

export function SocialBanner() {
    return (
        <section className="pt-40">
            <Banner className="h-70">
                <div className="flex h-full items-center justify-between">
                    <h2 className="text-[40px] leading-14 font-extrabold">{SOCIAL.title}</h2>

                    <div className="flex gap-2">
                        {SOCIAL.items.map(({ id, label, icon, href }) => (
                            <a key={id} href={href} aria-label={label}>
                                <img src={icon} alt="" className="size-16.5" />
                            </a>
                        ))}
                    </div>
                </div>
            </Banner>
        </section>
    )
}
