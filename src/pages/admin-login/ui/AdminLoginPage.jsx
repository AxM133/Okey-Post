export function AdminLoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#A5A7A9] p-5">
            <div className="w-120 rounded-2xl bg-white p-10">
                <h1 className="text-[22px] leading-8 font-bold">Выполните вход в админ панель сайта</h1>

                {/* TODO (react-hook-form): email, пароль, кнопка «Войти» */}
                <div className="mt-8 rounded-xl border-2 border-dashed border-line p-6 text-sm text-muted">
                    Форма входа (react-hook-form + AuthContext)
                </div>
            </div>
        </div>
    )
}
