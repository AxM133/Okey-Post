// Имитация запроса на сервер. Когда подключим axios, заменим вызовы на axios.post(...)
export const fakeRequest = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms))
