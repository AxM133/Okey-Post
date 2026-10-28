import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
})

export function useLondonTime() {
    const [now, setNow] = useState(() => new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return formatter.format(now).replaceAll(':', ' : ')
}
