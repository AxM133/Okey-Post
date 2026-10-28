import { cn } from "@/shared/lib";

export function Banner({ className, children }) {
    return (
        <section
            className={cn(
                'mx-15 rounded-[60px] bg-linear-to-tr from-brand-from to-brand-to text-white',
                className,
            )}
        >
            <div className="w-full h-full px-5 ms-auto max-w-350">
                {children}
            </div>
        </section>
    )
}