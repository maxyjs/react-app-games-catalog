# Games Catalog React App

Тестовое задание на позицию Frontend developer (React)  
### [Demo](https://effortless-pony-943041.netlify.app/)

### Задание:

Требуется реализовать web-приложение - “витрину” игр наподобие https://rawg.io/ или https://web.archive.org/web/20180831053229/https://gamegid.online/ на базе API https://rawg.io/apidocs.

##### Приложение будет состоять из двух страниц:
**- / - главная, каталог игр:**  
Необходимый функционал
- Пагинация (в идеале, бесконечный скролл)
- Сортировка по: рейтингу и дате релиза игры (в обе стороны)
- Фильтрация по платформам
- Поиск по названию
- Содержимое каждой “плитки” игры:
- Название
- Постер
- Рейтинг
- Дата релиза
- /game/[slug] - страница игры, на которую можно попасть, кликнув на плитку игры в каталоге, должна содержать более полную информацию об игре (помимо имевшейся на плитке):

**Описание:**
- Ссылка на сайт игры
- Слайдер со скриншотами игры

**Требования:**  
- Реализация на React
- Код на ES6 (без TypeScript)
- Адаптивная mobile-first вёрстка
- Сборка на webpack (ваш пример должен запуститься через npm i && npm start)
- Вёрстка с нуля без использования UI-библиотек типа MaterialUI (нам важнее оценить, как вы верстаете с нуля, чем итоговые “рюшки” и красота)

Особым плюсом будет:
- Вёрстка с использованием styled components

**Запуск проекта:**

```bash
npm i && npm start
```