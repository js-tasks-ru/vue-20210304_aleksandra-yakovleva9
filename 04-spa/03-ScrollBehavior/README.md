# ScrollBehavior

👶🏻 _Несложная задача_<br />
💼 _Часть проекта_

<!--start_statement-->
По умолчанию `vue-router` просто меняет компонент, который рендерится в `router-view` при переходе между маршрутами. При этом прокрутка страницы не меняется.

В большинстве случаев ожидается другое поведение. При обычных переходах на новые страницы традиционных сайтов, страница прокручивается на самый верх. Но иногда требуется прокрутить страницу к определённому месту или не менять положение.

Например, при переходе назад лучше вернуться в то же место. Также принято использовать fragment (hash, часть после # в URL) как якорь, указывая там идентификатор элемента (часто заголовка), на котором должна установиться прокрутка. 

Кроме того, в нашем проекте есть одно специфическое место. На странице митапа вкладки реализованы дочерними маршрутами. В результате при переходе между вкладками происходит рывок, как при смене страницы.

Изучите [документацию по ScrollBehavior](https://router.vuejs.org/guide/advanced/scroll-behavior.html) и реализуйте следующее поведение:
- по умолчанию страница прокручивается вверх;
- при переходе назад с `savedPosition` не изменять положение прокрутки;
- при наличии `hash` в маршруте прокрутить к элементу с идентификатором в `hash`;
- если переход происходит между маршрутами, **содержащими в цепочке** истинное `meta` свойство `saveScrollPosition`, положение прокрутки не должно меняться.

Чтобы проверить, находится ли мета-свойство хотя бы у одного маршрута в цепочке, используйте свойство `тхьmatched`.

<img src="https://i.imgur.com/DRB5jEG.gif" alt="Example" />
<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `router/index.js`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;<br>
приложение будет доступно на [http://localhost:8080/04-spa/03-ScrollBehavior](http://localhost:8080/04-spa/03-ScrollBehavior).

✅ Доступно автоматическое тестирование: `npm test ScrollBehavior`.