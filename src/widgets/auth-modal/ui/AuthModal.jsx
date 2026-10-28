import closeIcon from '@/shared/assets/close.svg'
import { useAuthModal } from '../model/useAuthModal'

export function AuthModal({ title, children }) {
    const { close } = useAuthModal()

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#A5A7A9]/95 p-5">
            <div className="relative w-120 rounded-2xl bg-white p-10.5 shadow-[0_10px_40px_rgba(31,36,40,0.15)]">
                <button
                    type="button"
                    onClick={close}
                    aria-label="Закрыть"
                    className="absolute -top-8 -right-10 cursor-pointer"
                >
                    <img src={closeIcon} alt="" />
                </button>

                <h1 className="max-w-80 text-[22px] leading-8 font-bold">{title}</h1>
                <div className="mt-7">{children}</div>
            </div>
        </div>
    )
}
