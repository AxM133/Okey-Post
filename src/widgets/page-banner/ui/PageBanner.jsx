import { cn } from '@/shared/lib'
import { Banner } from '@/shared/ui/Banner'
import { Button } from '@/shared/ui/Button'
import { Breadcrumbs } from './Breadcrumbs'

export function PageBanner({ crumb, title, subtitle, action, onAction }) {
    return (
        <Banner className={cn('pb-10', action ? 'min-h-95' : 'min-h-52.5')}>
            <div className="pt-10.5">
                <Breadcrumbs current={crumb} />
                <h1 className="mt-7 text-[44px] leading-15 font-extrabold">{title}</h1>
                {subtitle && <p className="mt-2 text-xl leading-7.5 font-bold">{subtitle}</p>}
                {action && (
                    <Button size="lg" className="mt-10" onClick={onAction}>
                        {action}
                    </Button>
                )}
            </div>
        </Banner>
    )
}
