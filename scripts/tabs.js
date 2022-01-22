const tabsFunc = () => {
  /* находим на странице кнопки с табами */
  const tabs = document.querySelectorAll(".card-detail__change");
  /* получаем заголовок таба */
  const tabsTitle = document.querySelector(".card-details__title");
  /* получаем цену телефона  */
  const tabsPrice = document.querySelector(".card-details__price");
  /* получаем изображение телефона */
  tabsImage = document.querySelector(".card__image_item");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: "60000",
      image: "img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256",
      price: "65000",
      image: "img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: "70000",
      image: "img/iPhone-sierra_blue.webp",
    },
  ];

  const changeContent = (index) => {
    /* меняем контент на странице, обращаясь к свойствам объектов массива с характеристиками телефонов */
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    /* меняем цену телефонов на странице */
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;
    /* меняем изображение телефона по клику на таб */
    tabsImage.setAttribute("src", tabsOptions[index].image);
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      /* после перебора табов удаляем активный класс */
      tab.classList.remove("active");
      /* если индекс таба, по которому кликнули, совпал, добавляем к табу активный класс */
      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });

    changeContent(indexClickedTab);
  };

  /* осуществляем перебор кнопок */
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      /* по клику получаем индекс каждого таба */
      changeActiveTabs(index);
    });
  });

  changeContent(0);
};
tabsFunc();
