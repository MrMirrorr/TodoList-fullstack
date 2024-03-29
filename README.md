# Fullstack Todo List
![Todo-list-fullstack](https://github.com/MrMirrorr/TodoList-fullstack/assets/105848492/6aebde65-a0eb-4c0f-b58f-ef71416709dd)
## Введение

Это полнофункциональное приложение Todo List, предназначенное для управления вашими задачами. Оно позволяет пользователям создавать, редактировать, удалять и изменять статус задачи на "выполнено", "в процессе" и "ожидает выполнения". Все действия пользователя сопровождаются всплывающими уведомлениями.

## Функциональность

- Создание задач
- Редактирование задач
- Удаление задач
- Изменение статуса задачи

## Технологии

### Frontend:

- ReactJS
- Валидация форм: React Hook Form + yup
- Стилизация: Material UI

### Backend:

- REST API: NodeJS + Express
- База данных: MongoDB + mongoose

## Требования

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Установка и запуск

Клонируйте репозиторий: `git clone https://github.com/MrMirrorr/TodoList-fullstack.git`

Установите зависимости и запустите frontend:

```
cd front
npm install
npm run start
```

**ВАЖНО** Прежде, чем запустить backend, создайте файл **.env** в папке back и пропишите в нем: **DB_CONNECTION_STRING="[путь к своей базе данных MongoDB]"**.

Установите зависимости и запустите backend:

```
cd back
npm install
npm run serve
```

## Использование

Для использования приложения Todo List, [откройте](http://localhost:3000) его в вашем браузере.

## Лицензия

[The MIT License](https://github.com/MrMirrorr/TodoList-fullstack/blob/master/LICENSE.txt)
