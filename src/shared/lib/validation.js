export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const PHONE_PATTERN = /^\+?[\d\s()-]{7,18}$/
export const URL_PATTERN = /^https?:\/\/[^\s/$.?#].[^\s]*$/i

export const emailRules = {
    required: 'Введите email',
    pattern: { value: EMAIL_PATTERN, message: 'Похоже, в email опечатка' },
}

export const PASSWORD_MIN = 8
export const requiredText = (label) => ({
    required: `Заполните поле «${label}»`,
    validate: (v) => v.trim() !== '' || `Заполните поле «${label}»`,
})
