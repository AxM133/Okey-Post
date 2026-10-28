import { Container } from '@/shared/ui/Container'
import { NotificationCard } from '@/entities/notification'
import { useNotificationsSection } from '../model/useNotificationsSection'
import { CustomsNotice } from './CustomsNotice'

export function NotificationsSection() {
    const { title, notifications, customsNotice, warning } = useNotificationsSection()

    return (
        <section className="pt-22">
            <Container wide>
                <h1 className="text-[28px] font-bold">{title}</h1>

                <div className="mt-8 grid grid-cols-2 items-start gap-x-7.5 gap-y-5">
                    {notifications.map((n) => (
                        <NotificationCard key={n.id} notification={n} />
                    ))}
                    <CustomsNotice notice={customsNotice} icon={warning} />
                </div>
            </Container>
        </section>
    )
}
