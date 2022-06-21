Vue.component("filter-comp", {
  props: ["price"],
  data() {
    return {
      filterShow: {
        catalog: false,
        tranding: false,
        size: false,
        price: false,
      },
      showFilterItems: {
        category: false,
        brand: false,
        designer: false,
      },
      selectedSize: [],
      userPriceSelect: this.price,
    };
  },
  methods: {
    onSelectedPrice() {
      this.$emit("sortbyprice", this.userPriceSelect);
    },
  },
  template: `
  <div class="filters-catalog">
  <div class="filters-catalog__inner container">
    <div class="filters-catalog__left">
      <button
        class="filters-catalog__btn"
        @click="filterShow.catalog = !filterShow.catalog"
      >
        <span class="filters-catalog__text text--uppercase">filter</span>
        <img class="filters-catalog__icon" src="img/icon-filter.svg" alt="" />
        <img
          class="filters-catalog__icon--hover"
          src="img/icon-filter--hover.svg"
          alt=""
        />
      </button>
      <div class="filters-catalog__menu" v-show="filterShow.catalog">
        <nav class="menu">
          <ul class="menu__list menu__list--filter">
            <li class="menu__item menu__item--filter">
              <span
                class="link menu__link menu__link--filter text--uppercase text--gray"
                @click="showFilterItems.category = !showFilterItems.category"
              >
                Category</span
              >

              <ul
                class="submenu__list submenu__list--filter"
                v-show="showFilterItems.category"
              >
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Accessories</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Bags</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Denim</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Hoodies & Sweatshirts
                  </a>
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Jackets & Coats</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Polos</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Shirts</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Shoes</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Sweaters & Knits</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >T-Shirts</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Tanks</a
                  >
                </li>
              </ul>
            </li>
            <li class="menu__item menu__item--filter">
              <span
                class="link menu__link menu__link--filter text--uppercase text--gray"
                @click="showFilterItems.brand = !showFilterItems.brand"
              >
                Brand</span
              >

              <ul
                class="submenu__list submenu__list--filter"
                v-show="showFilterItems.brand"
              >
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Accessories</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Bags</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Denim</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Hoodies & Sweatshirts
                  </a>
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Jackets & Coats</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Polos</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Shirts</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Shoes</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Sweaters & Knits</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >T-Shirts</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Tanks</a
                  >
                </li>
              </ul>
            </li>

            <li class="menu__item menu__item--filter">
              <span
                class="link menu__link menu__link--filter text--uppercase text--gray"
                @click="showFilterItems.designer = !showFilterItems.designer"
              >
                Designer
              </span>
              <ul
                class="submenu__list submenu__list--filter"
                v-show="showFilterItems.designer"
              >
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Accessories</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Bags</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Denim</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Hoodies & Sweatshirts
                  </a>
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Jackets & Coats</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Polos</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Shirts</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Shoes</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Sweaters & Knits</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >T-Shirts</a
                  >
                </li>
                <li class="submenu__item submenu__item--filter">
                  <a class="link submenu__link text--capitalize" href="#"
                    >Tanks</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="filters-catalog__right">
      <div class="filter-category">
        <div class="filter-category__item filter-category__item--trending">
          <span class="text text--gray text--uppercase">TRENDING NOW</span>
          <img
            class="filter-category__arrow"
            src="img/filter-arrow.svg"
            alt="arrow"
          />
        </div>
        <div class="filter-category__item filtercategory__item--size">
          <div
            @click="filterShow.size = !filterShow.size"
            class="filter-category__wrap filter-category__wrap--size"
          >
            <span class="text text--gray text--uppercase">SIZE</span>
            <img
              class="filter-category__arrow"
              src="img/filter-arrow.svg"
              alt="arrow"
            />
          </div>
          <div
            v-show="filterShow.size"
            class="filter-category__popup filter-category__popup--size"
          >
            <div class="filter-category__input">
              <label class="text text--gray"
                ><input type="checkbox" v-model="selectedSize" value="XS" />
                XS</label
              >
            </div>
            <div class="filter-category__input">
              <label class="text text--gray"
                ><input type="checkbox" v-model="selectedSize" value="S" />
                S</label
              >
            </div>
            <div class="filter-category__input">
              <label class="text text--gray"
                ><input type="checkbox" v-model="selectedSize" value="M" />
                M</label
              >
            </div>
            <div class="filter-category__input">
              <label class="text text--gray"
                ><input type="checkbox" v-model="selectedSize" value="L" />
                L</label
              >
            </div>
          </div>
        </div>
        <div class="filter-category__item filtercategory__item--price">
          <div
            @click="filterShow.price = !filterShow.price"
            class="filter-category__wrap filter-category__wrap--price"
          >
            <span class="text text--gray text--uppercase">PRICE</span>
            <img
              class="filter-category__arrow"
              src="img/filter-arrow.svg"
              alt="arrow"
            />
          </div>
          <div
            v-show="filterShow.price"
            class="filter-category__popup filter-category__popup--size"
          >
            <div class="filter-category__input">
              <label class="text text--gray"
                ><input
                  type="radio"
                  v-model="userPriceSelect"
                  value="maxPrice"
                  v-on:change="onSelectedPrice"
                />
                По возрастанию
              </label>
            </div>
            <div class="filter-category__input">
              <label class="text text--gray"
                ><input
                  type="radio"
                  value="minPrice"
                  v-on:change="onSelectedPrice"
                  v-model="userPriceSelect"
                />
                По убыванию
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  `,
});
