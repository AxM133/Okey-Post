import download from '@/shared/assets/download.svg'
import edit from '@/shared/assets/edit.svg'
import trash from '@/shared/assets/trash.svg'

const ICONS = {
    edit: { src: edit, label: 'Редактировать' },
    delete: { src: trash, label: 'Удалить' },
    download: { src: download, label: 'Скачать' },
}

export function RowActions({ actions = ['edit', 'delete'] }) {
    return (
        <div className="flex items-center gap-4">
            {actions.map((name) => (
                <button key={name} type="button" aria-label={ICONS[name].label} className="cursor-pointer">
                    <img src={ICONS[name].src} alt="" />
                </button>
            ))}
        </div>
    )
}
