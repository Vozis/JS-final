Vue.component("search-form", {
  props: ["search"],
  data() {
    return {
      searchText: this.search,
    };
  },
  methods: {
    onSearchChange() {
      this.$emit("searchchange", this.searchText);
    },
  },
  template: `
  <form action="#" class="header__search search-form" v-on:submit.prevent>
  <input class="search-form__input" type="text" v-model="searchText" v-on:input="onSearchChange"/>
  <img
    class="icon icon-search search-form__btn"
    src="img/search.svg"
    alt=""
  />
</form>
  `,
});
