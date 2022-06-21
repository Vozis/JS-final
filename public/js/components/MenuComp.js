Vue.component("menu-comp", {
  data() {
    return {
      menuShow: false,
    };
  },
  template: `
  <div class="header__menu menu-header">
  <button
  class="menu-header__burger" 
  type="button" 
  @click="menuShow=!menuShow">
    <img
      src="img/menu-burger.svg"
      alt="menu"
    />
  </button>
  <nav class="menu menu--absolute" v-show="menuShow" >
    <button class="menu__btn close-btn" type="button" @click="menuShow=!menuShow">
      <img
        src="img/close-icon.svg"
        alt="close-icon"
      />
    </button>
    <span class="menu__heading text--uppercase text--700">Menu</span>
    <ul class="menu__list">
      <li class="menu__item">
        <a href="#" class="link menu__link text--uppercase text--red">Man</a>
        <ul class="submenu__list menu__submenu">
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#"
              >Accessories</a
            >
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Bags</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Denim</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">T-Shirts</a>
          </li>
        </ul>
      </li>
      <li class="menu__item">
        <a href="#" class="link menu__link text--uppercase text--red">Woman</a>

        <ul class="submenu__list menu__submenu">
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#"
              >Accessories</a
            >
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#"
              >Jackets & Coats</a
            >
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Polos</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">T-Shirts</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Shirts</a>
          </li>
        </ul>
      </li>
      <li class="menu__item">
        <a href="#" class="link menu__link text--uppercase text--red">Kids</a>

        <ul class="submenu__list menu__submenu">
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#"
              >Accessories</a
            >
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#"
              >Jackets & Coats</a
            >
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Polos</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">T-Shirts</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Shirts</a>
          </li>
          <li class="submenu__item">
            <a class="link submenu__link text--capitalize" href="#">Bags</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>

  `,
});
