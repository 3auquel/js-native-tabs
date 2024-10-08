# Tab Switcher

## Описание

Этот проект реализует функционал переключения вкладок на веб-странице с использованием чистого JavaScript. Весь блок кода обернут в функцию, что позволяет гибко использовать его для любых элементов с разными классами.

## Функциональные возможности

- **Переключение вкладок**: Пользователь может переключаться между различными вкладками, нажимая на их заголовки.
- **Динамическое отображение контента**: Контент каждой вкладки скрывается или показывается с помощью динамического изменения CSS-классов `hide` и `show`.
- **Гибкость использования**: Классы для табов, контейнера и содержимого можно передавать в функцию в качестве аргументов, что делает компонент универсальным.

## Пример использования

Для активации функции переключения вкладок на вашем сайте, вызовите функцию `tabSwitcher`, передав названия классов, используемых в HTML-коде.

### Пример HTML

```html
<div class="info-header">
    <div class="info-header-tab">Tab 1</div>
    <div class="info-header-tab">Tab 2</div>
    <div class="info-header-tab">Tab 3</div>
</div>

<div class="info-tabcontent">Content for Tab 1</div>
<div class="info-tabcontent">Content for Tab 2</div>
<div class="info-tabcontent">Content for Tab 3</div>
```
### Пример вызова функции

```javascript
tabSwitcher('info-header-tab', 'info-header', 'info-tabcontent');
```
## Здесь:

`info-header-tab` — класс для вкладок.
`info-header` — класс для контейнера вкладок.
`info-tabcontent` — класс для контента, который будет переключаться.

## Как работает код
1. **Функция `tabSwitcher`:**
- **Принимает три аргумента**:

  -  `tabClass` — класс для заголовков вкладок.
  - `infoClass` — класс для контейнера вкладок.
  - `tabContentClass` — класс для содержимого вкладок.

2. **Основные функции:**

-  `hideTabContent(a)` — скрывает все вкладки, начиная с индекса a.
-  `showTabContent(b)` — отображает содержимое вкладки под индексом b.
3. **Переключение вкладок:**

-  При клике на вкладку функция скрывает все содержимое и показывает только то, которое соответствует выбранной вкладке.

## CSS для работы с классами

Не забудьте добавить CSS для управления отображением контента:

```css
.hide {
    display: none;
}

.show {
    display: block;
}
```

## Требования
- Любой современный веб-браузер, поддерживающий методы `addEventListener` и `classList` для работы с событиями DOM и изменениями классов.
