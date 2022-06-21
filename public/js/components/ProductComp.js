Vue.component("products", {
  props: ["search", "price"],
  data() {
    return {
      searchInfo: this.search,
      sortParam: this.price,
      catalogUrl: "/catalogData.json",
      products: [],
    };
  },
  watch: {
    search(newVal) {
      this.searchInfo = newVal;
    },
    price(newVal) {
      this.sortParam = newVal;
    },
  },
  template: `
  <div class="catalog__list">
    <product v-for="item of sortedList" 
    :key="item.id_product" 
    :product="item"
    ></product>
  </div>
  `,
  mounted() {
    this.$root.getJson(`/api/products`).then((data) => {
      for (let item of data) {
        this.$data.products.push(item);
        // this.$data.filtered.push(item);
      }
    });
  },
  methods: {
    // filter(userSearch) {
    //   let regexp = new RegExp(userSearch, "i");
    //   this.filtered = this.products.filter((el) =>
    //     regexp.test(el.product_name),
    //   );
    // },
  },
  computed: {
    filteredList() {
      let regexp = new RegExp(this.searchInfo, "i");
      return this.products.filter((el) => regexp.test(el.product_name));
    },
    sortedList() {
      switch (this.sortParam) {
        case "maxPrice":
          return this.filteredList.sort((d1, d2) =>
            d1.price > d2.price ? 1 : -1,
          );
        case "minPrice":
          return this.filteredList.sort((d1, d2) =>
            d2.price > d1.price ? 1 : -1,
          );
        default:
          return this.filteredList;
      }
    },
  },
});

Vue.component("product", {
  props: ["product"],
  template: `
  <div class="product-card">
  <div class="product-card__top">
    <img class="product-card__img" :src="product.img_product" alt="jacket" />
    <div class="product-card__hover">
      <button class="btn btn--featured" @click="$root.$refs.cart.addProduct(product)">
        <img src="img/basket.svg" alt="" class="btn__img--left"/>
        Add to Cart
      </button>
    </div>
  </div>
  <div class="product-card__text">
    <h3 class="text heading-3">{{product.product_name}}</h3>
    <p class="text text--gray">{{product.product_description}}</p>
    <p class="product-card__price text text--red text--uppercase">
      $ {{product.price}}
    </p>
  </div>
</div> 
  `,
});
