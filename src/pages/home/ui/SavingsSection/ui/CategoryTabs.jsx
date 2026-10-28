import { cn } from '@/shared/lib'

export function CategoryTabs({ categories, activeId, onChange }) {
    return (
        <div className="flex h-25 overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            {categories.map(({ id, label, icon }) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => onChange(id)}
                    className={cn(
                        'flex flex-1 cursor-pointer items-center justify-center gap-3.5 text-[15px] font-bold transition hover:bg-soft',
                        id === activeId && 'bg-soft',
                    )}
                >
                    <img src={icon} alt="" className="size-13.5" />
                    {label}
                </button>
            ))}
        </div>
    )
}
