Vue.component("featured-items-comp", {
  template: `
  <div class="featured-items container">
  <div class="featured-items__head">
    <h2 class="text heading-2">Fetured Items</h2>
    <p class="text text--gray">
      Shop for items based on what we featured in this week
    </p>
  </div>
  <div class="featured-items__inner">
    <products ref="products"></products>
  </div>
  <form action="#">
    <button class="btn btn--red-border featured-items__btn-show">
      Browse All Product
    </button>
  </form>
</div>`,
});
