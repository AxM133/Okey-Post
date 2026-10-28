import searchIcon from '@/shared/assets/search.svg'

export function FaqSearch({ value, onChange }) {
    return (
        <label className="block rounded-2xl bg-white px-11.5 py-8 shadow-[0_10px_40px_rgba(31,36,40,0.08)]">
            <span className="text-xs font-bold">Поиск в вопросах и ответах:</span>

            <div className="mt-3 flex items-center border-b border-muted pb-2">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Введите свой вопрос..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted/60"
                />
                <img src={searchIcon} alt="" />
            </div>
        </label>
    )
}
