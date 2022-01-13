# js-for-fun

## https://learn.better.dev/courses/getting-started-with-javascript/

console.log(`%c${message} 🔅`, "color:grey; font-size:15px"); </br>
console.log("💜".repeat(10)) </br>
console.log(string.startsWith("this")); //true </br>

minutes.innerText = `${String(numberOfMinutes).padStart(2, 0)}`; </br>

- **_.padStart(2, 0)_** - только к строчным эл-ам </br>

console.log({ numberOfMinutes, numberOfSeconds }); - **_консолит результат в формате обьекта_** (ключ: значение) </br>

- setInterval(function, 1000(ms)); запуск
- clearInterval(function) стоп

- **_this.parentNode_** - родитель эл-та

_window.innerHeight_ - видимая часть окна браузера (только Viewport) </br>
_window.outerHeight_ - вся высота окна (закладки, Viewport, консоль и т.д.) </br>
_document.body.clientHeight_ - высота всего скрола </br>
_window.scrollX_ _window.scrollY_ - точки остановки скролла на окне </br>
