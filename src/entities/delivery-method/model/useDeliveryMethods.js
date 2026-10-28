import { DELIVERY_METHODS } from './methods.data'

// Позже здесь будет запрос через axios.
export function useDeliveryMethods() {
    return { methods: DELIVERY_METHODS }
}
