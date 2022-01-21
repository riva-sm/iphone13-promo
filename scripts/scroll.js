/* Находим ссылки из меню в шапке */
const links = document.querySelectorAll(".header-menu__item a");
/* Активируем библиотеку polyfill для кроссбраузерного скролла */
seamless.polyfill();
/* Осуществляем перебор ссылок в меню в шапке */
links.forEach((element) => {
  element.addEventListener("click", (event) => {
    /* Отменяем стандартное поведение ссылок */
    event.preventDefault();
    /* Записываем в if аттрибут ссылок href */
    const id = element.getAttribute("href").substring(1);
    /* Присваиваем каждой секции id как href ссылок */
    const section = document.getElementById(id);
    /* если на странице существует секция, осуществляем к ней плавную прокрутку */
    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "start",
      });
    } else {
      seamless.elementScrollIntoView(
        document.querySelector("#characteristics"),
        {
          behavior: "smooth",
          block: "center",
          inline: "center",
        }
      );
    }
  });
});
