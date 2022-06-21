Vue.component("header-comp", {
  template: `
  <header class="header page__header">
  <div class="container">
    <div class="header__inner">
      <div class="header__top">
        <div class="header__top-left">
          <a href="index.html">
            <img class="header__logo logo" src="img/logo.svg" alt="logo" />
          </a>
          <slot name="search-block"></slot>
        
        </div>
        <div class="header__top-right">
          <menu-comp></menu-comp>
          <img
            class="header__icon-user icon"
            src="img/person-logo.svg"
            alt="user"
          />
          <slot name="cart-block"></slot>
        </div>
      </div>
      <div class="header__bottom">
        <ul class="header__main-menu main-menu">
          <li class="main-menu__item">
            <a class="main-menu__link" href="index.html">Главная</a>
          </li>
          <li class="main-menu__item">
            <a class="main-menu__link" href="catalog.html">Каталог</a>
          </li>
          <li class="main-menu__item">
            <a class="main-menu__link" href="cart.html">Корзина</a>
          </li>
          <li class="main-menu__item">
            <a class="main-menu__link" href="registration.html">Регистрация</a>
          </li>
          <li class="main-menu__item">
            <a class="main-menu__link" href="product.html">Товар</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
`,
});
