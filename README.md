# Описание проекта
---
Приложение написано после обучение на курсах по React Native с целью закрепления полученных знаний и практики работы в команде. Команда состаяла из двух разработчиков ([@IwanMaks](https://github.com/IwanMaks) и [@ANZania](https://github.com/ANZania)
В данном проете для работы в команде использовались такие технологие как, GitHub Projects, Git Kraken, а также глубокое погружение в Git Flow.
<br/>

Предполагалось реализовать приложение, с помощью, которого можно создавать задачи и отслеживать их прогресс, но в данный момент приложение продолжает дорабатываться.

Дизайн:
<br/>
https://www.figma.com/file/jsTWFojVfTPTsGxQXBnwt7/Task-Management-App-Source?node-id=328%3A265
<br/>
Открыть приложение в Expo Go: 
<br/>
![image](https://user-images.githubusercontent.com/61160887/118709261-6e5fb980-b825-11eb-951a-aef01d461cef.png)


---
### Описание:

Мы создали кроссплатформенное приложение для работы пользователя с собственными задачами.

### Технологии:

- **React Native** - для быстрого написания кроссплатформенного приложения. Веб-часть сервиса можно в дальнейшем реализовать на React и переиспользовать часть кода мобильного приложения.
- **Expo** - для ускорения и упрощения разработки и отладки приложения, деплоя на сервера expo для демонстрации
- **react-native-navigation** - для навигации по экранам приложения 
- **Firebase database** - для хранения данных пользователей
- **Redux** - для работы с данными пользователей
- **Redux-thunk** - для реализации асинхронных запросов к БД

### Функционал:

- На данный момент реализована лишь вёрстка всех экранов приложения с заготовкой под логическую часть

### Над чем ведется работа:

- [ ] При отсутсвии интернет-соединения сохранять данные пользователя в локальную БД SQLite, при появлении интернет-соединения отправлять их на сервер, если были внесены изменения
- [ ] Реализация регистрации пользователя
- [ ] Изменения профиля
- [ ] Реализации логики с забором данных из общей базы и динамический вывод задач под каждого пользователя
- [ ] Создание и добавление новых задач в свой личный список
- [ ] Реализация связи с командой
