import { cn } from '@/shared/lib'
import { Banner } from '@/shared/ui/Banner'
import { Button } from '@/shared/ui/Button'

export function PromoBanner({ image, title, text, action, onAction, titleClassName }) {
    return (
        <Banner className="h-120">
            <div className="flex h-full items-center">
                <div className="w-119.25 shrink-0">
                    <img src={image} alt="" />
                </div>

                <div className="max-w-190">
                    <h2 className={cn(titleClassName)}>{title}</h2>
                    <p className="mt-3 text-lg font-light opacity-90">{text}</p>
                    <Button size="lg" className="mt-7.5 w-60" onClick={onAction}>
                        {action}
                    </Button>
                </div>
            </div>
        </Banner>
    )
}
