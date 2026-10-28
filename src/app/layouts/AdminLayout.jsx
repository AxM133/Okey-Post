import { Outlet } from 'react-router-dom'
import { AdminHeader } from '@/widgets/admin-header'
import { CabinetFooter } from '@/widgets/cabinet-footer'

export function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <main className="min-h-150">
                <Outlet />
            </main>
            <CabinetFooter />
        </>
    )
}
