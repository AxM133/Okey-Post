import { AdminListSection } from '@/widgets/admin-list-section'
import { ADMIN_PAGES, ADMIN_PAGE_COLUMNS } from '../model/pages.data'

export function AdminPagesEditorPage() {
    return <AdminListSection title="Редактор страниц" columns={ADMIN_PAGE_COLUMNS} rows={ADMIN_PAGES} />
}
