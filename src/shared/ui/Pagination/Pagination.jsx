import { cn, getPageItems } from '@/shared/lib'

const circle = 'flex size-11 items-center justify-center rounded-full border text-sm'

export function Pagination({ page, totalPages, onChange }) {
    return (
        <nav className="flex items-center justify-center gap-2" aria-label="Страницы">
            <button
                type="button"
                disabled={page === 1}
                onClick={() => onChange(page - 1)}
                className={cn(circle, 'cursor-pointer border-line text-line disabled:cursor-default')}
                aria-label="Назад"
            >
                ←
            </button>

            {getPageItems(page, totalPages).map((item, i) =>
                item === '...' ? (
                    <span key={`dots-${i}`} className="px-1 text-line">…</span>
                ) : (
                    <button
                        key={item}
                        type="button"
                        onClick={() => onChange(item)}
                        className={cn(
                            circle,
                            'cursor-pointer',
                            item === page ? 'border-primary text-primary' : 'border-line text-line',
                        )}
                    >
                        {item}
                    </button>
                ),
            )}

            <button
                type="button"
                disabled={page === totalPages}
                onClick={() => onChange(page + 1)}
                className={cn(circle, 'cursor-pointer border-line text-line disabled:cursor-default')}
                aria-label="Вперёд"
            >
                →
            </button>
        </nav>
    )
}
