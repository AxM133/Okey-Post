import searchIcon from '@/shared/assets/search.svg'
import { cn } from '@/shared/lib'

export function SearchInput({ value, onChange, placeholder, className }) {
    return (
        <label className={cn('flex h-15 items-center rounded-full border border-line px-7', className)}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted/60"
            />
            <img src={searchIcon} alt="" />
        </label>
    )
}
