import { COUNTRIES, SERVICES } from './calculator.data'

const PER_HALF_KG = 4.5

// Учебная формула: базовая цена страны + £4.5 за каждые 0.5 кг + доп. услуга
export function calcDelivery({ country, weight, service }) {
    const base = COUNTRIES.find((c) => c.value === country)?.base ?? 0
    const fee = SERVICES.find((s) => s.value === service)?.fee ?? 0
    const weightPart = Math.ceil(weight / 0.5) * PER_HALF_KG

    return Number((base + weightPart + fee).toFixed(2))
}
