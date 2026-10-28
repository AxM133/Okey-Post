# OkeyPost

Учебный проект: сайт доставки посылок из Великобритании по макету Figma.
Стек: React 19, Vite, Tailwind CSS v4, react-router, axios, zustand, react-hook-form, Context API.
Архитектура: Feature-Sliced Design (FSD).

## Запуск

```
npm install
npm run dev
```

## Слои (импортировать можно только то, что лежит ниже)

```
app → pages → widgets → features → entities → shared
```

| Слой | Что лежит |
|---|---|
| `app` | роутер, макеты (`layouts`), глобальные стили |
| `pages` | страницы. Каждая собирается из разделов |
| `widgets` | крупные блоки: шапка, футер, баннеры, шаблон админ-списка |
| `features` | действия пользователя (формы: расчёт доставки, подписка, ссылка на товар) |
| `entities` | сущности: user, order, parcel, transaction, notification, review, article, shop, delivery-method |
| `shared` | кнопки, поля, таблицы, конфиг маршрутов, утилиты |

## Правило структуры

Страница только **собирает разделы**. У каждого раздела (и сущности, виджета) две папки:

```
SavingsSection/
  index.js          публичный API: снаружи импортируем только отсюда
  ui/               компоненты (только разметка и props)
  model/            данные (*.data.js) и хуки (use*.js): состояние, логика, навигация
```

- Компонент в `ui/` берёт всё нужное из одного хука `useSomething()` из `model/`.
- Хуки сущностей (`useOrders`, `useReviews`...) сейчас отдают моки, позже в них будет запрос через axios.
- Если в файле данных есть JSX (колонки таблиц с `render`), файл называется `*.data.jsx`.

## Формы (react-hook-form)

Каждая форма живёт в `features/<имя>/` и устроена одинаково: в `model/useXxxForm.js` лежат `useForm`, правила проверки и отправка,
в `ui/` только разметка. Общие правила (email, телефон, URL) в `shared/lib/validation.js`, имитация запроса `fakeRequest`.

| Форма | Что показывает |
|---|---|
| subscribe | базовое: `register`, `handleSubmit`, `reset`, `mode: 'onBlur'` |
| calculate-delivery | `valueAsNumber`, `min/max`, `pattern`, результат после отправки |
| auth-login | два шага (данные → код из СМС), две формы в одном хуке |
| auth-register, auth-recover | простые формы авторизации |
| change-password | `validate` по значениям других полей, `deps` |
| edit-profile | `defaultValues` из пользователя, загрузка файла, превью, `useWatch` |
| create-order, address-book | `useFieldArray` (добавить, дублировать, удалить) |
| create-virtual-order, create-parcel | чекбоксы-массив, `select` |
| filter-orders, filter-transactions, admin-filters | формы-фильтры, сброс |
| admin-login, admin-settings, admin-order-edit | `setError`, `isDirty`, `setValue` |

## Что ещё не сделано

- `AuthContext`: сейчас вход просто переходит в кабинет, пользователь «зашит» (`useCurrentUser`), нет защиты маршрутов;
- axios-клиент и мок-API (json-server): вместо запросов везде `fakeRequest`, данные в `*.data.js`;
- zustand-сторы (фильтры заказов, уведомления, корзина заказа вместо localStorage).
