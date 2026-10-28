import { Banner } from '@/shared/ui/Banner'
import { Button } from '@/shared/ui/Button'
import { useHero } from '../model/useHero'

export function HeroSection() {
    const { title, text, action, illustration, onAction } = useHero()

    return (
        <Banner className="h-170">
            <div className="flex h-full items-center justify-between">
                <div className="max-w-180">
                    <h1 className="text-[64px] leading-20 font-extrabold">{title}</h1>
                    <p className="mt-8 text-xl leading-[42px] font-light opacity-90">{text}</p>
                    <Button size="lg" className="mt-10" onClick={onAction}>
                        {action}
                    </Button>
                </div>

                <img src={illustration} alt="" className="w-143" />
            </div>
        </Banner>
    )
}
