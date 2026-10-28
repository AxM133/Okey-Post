import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

import { RootLayout } from '@/app/layouts/RootLayout'
import { CabinetLayout } from '@/app/layouts/CabinetLayout'
import { AdminLayout } from '@/app/layouts/AdminLayout'

import { HomePage } from '@/pages/home'
import { HowToBuyPage } from '@/pages/how-to-buy'
import { SalesPage } from '@/pages/sales'
import { PricesPage } from '@/pages/prices'
import { FaqPage } from '@/pages/faq'
import { PartnerPage } from '@/pages/partner'
import { BlogPage } from '@/pages/blog'
import { ShopsPage } from '@/pages/shops'
import { LoginPage } from '@/pages/login'
import { RegisterPage } from '@/pages/register'
import { ForgotPasswordPage } from '@/pages/forgot-password'
import { NotFoundPage } from '@/pages/not-found'

import { ProfilePage } from '@/pages/profile'
import { ProfileEditPage } from '@/pages/profile-edit'
import { ChangePasswordPage } from '@/pages/change-password'
import { OrderCreatePage } from '@/pages/order-create'
import { VirtualOrderPage } from '@/pages/virtual-order'
import { OrdersPage } from '@/pages/orders'
import { ParcelsPage } from '@/pages/parcels'
import { TransactionsPage } from '@/pages/transactions'
import { CreateParcelPage } from '@/pages/create-parcel'
import { AddressBookPage } from '@/pages/address-book'
import { NotificationsPage } from '@/pages/notifications'

import { AdminLoginPage } from '@/pages/admin-login'
import { AdminOrdersPage } from '@/pages/admin-orders'
import { AdminOrderEditPage } from '@/pages/admin-order-edit'
import { AdminParcelsPage } from '@/pages/admin-parcels'
import { AdminUsersPage } from '@/pages/admin-users'
import { AdminTransactionsPage } from '@/pages/admin-transactions'
import { AdminExpensesPage } from '@/pages/admin-expenses'
import { AdminSalariesPage } from '@/pages/admin-salaries'
import { AdminPagesEditorPage } from '@/pages/admin-pages-editor'
import { AdminSettingsPage } from '@/pages/admin-settings'

export const router = createBrowserRouter([
    // Публичный сайт: шапка + футер
    {
        element: <RootLayout />,
        children: [
            { path: ROUTES.home, element: <HomePage /> },
            { path: ROUTES.howToBuy, element: <HowToBuyPage /> },
            { path: ROUTES.sales, element: <SalesPage /> },
            { path: ROUTES.prices, element: <PricesPage /> },
            { path: ROUTES.faq, element: <FaqPage /> },
            { path: ROUTES.partner, element: <PartnerPage /> },
            { path: ROUTES.blog, element: <BlogPage /> },
            { path: ROUTES.shops, element: <ShopsPage /> },
            { path: ROUTES.login, element: <LoginPage /> },
            { path: ROUTES.register, element: <RegisterPage /> },
            { path: ROUTES.forgotPassword, element: <ForgotPasswordPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },

    // Личный кабинет: своя шапка
    {
        path: ROUTES.cabinet.root,
        element: <CabinetLayout />,
        children: [
            { index: true, element: <Navigate to={ROUTES.cabinet.profile} replace /> },
            { path: ROUTES.cabinet.profile, element: <ProfilePage /> },
            { path: ROUTES.cabinet.profileEdit, element: <ProfileEditPage /> },
            { path: ROUTES.cabinet.passwordChange, element: <ChangePasswordPage /> },
            { path: ROUTES.cabinet.orders, element: <OrdersPage /> },
            { path: ROUTES.cabinet.orderCreate, element: <OrderCreatePage /> },
            { path: ROUTES.cabinet.virtualOrder, element: <VirtualOrderPage /> },
            { path: ROUTES.cabinet.parcels, element: <ParcelsPage /> },
            { path: ROUTES.cabinet.transactions, element: <TransactionsPage /> },
            { path: ROUTES.cabinet.createParcel, element: <CreateParcelPage /> },
            { path: ROUTES.cabinet.addressBook, element: <AddressBookPage /> },
            { path: ROUTES.cabinet.notifications, element: <NotificationsPage /> },
        ],
    },

    // Админка: вход без бокового меню, остальное внутри AdminLayout
    { path: ROUTES.admin.login, element: <AdminLoginPage /> },
    {
        path: ROUTES.admin.root,
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to={ROUTES.admin.orders} replace /> },
            { path: ROUTES.admin.orders, element: <AdminOrdersPage /> },
            { path: ROUTES.admin.orderEdit, element: <AdminOrderEditPage /> },
            { path: ROUTES.admin.parcels, element: <AdminParcelsPage /> },
            { path: ROUTES.admin.users, element: <AdminUsersPage /> },
            { path: ROUTES.admin.transactions, element: <AdminTransactionsPage /> },
            { path: ROUTES.admin.expenses, element: <AdminExpensesPage /> },
            { path: ROUTES.admin.salaries, element: <AdminSalariesPage /> },
            { path: ROUTES.admin.pagesEditor, element: <AdminPagesEditorPage /> },
            { path: ROUTES.admin.settings, element: <AdminSettingsPage /> },
        ],
    },
])
