import { CURRENT_USER } from './user.data'

// Пока пользователь «зашит» в код. Позже здесь будет AuthContext.
export function useCurrentUser() {
    return { user: CURRENT_USER }
}
