import { useCurrentUser } from '@/entities/user'

export function useProfileCard() {
    const { user } = useCurrentUser()

    return {
        photo: user.photo,
        rows: [
            { label: 'Имя:', value: user.name },
            { label: 'Логин:', value: user.login },
            { label: 'E-mail:', value: user.email },
            { label: 'Телефон:', value: user.phone },
            { label: 'Адрес:', value: user.address },
        ],
        editLabel: 'Редактировать',
        passwordLabel: 'Изменить пароль',
    }
}
