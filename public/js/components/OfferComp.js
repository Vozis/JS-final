Vue.component("offer-comp", {
  template: `
  <div class="container offer">
  <div class="offer__item offer__item--woman">
    <img
      src="img/offer_woman.jpg"
      alt=""
      class="offer__img offer__img--woman"
    />
    <div class="offer__text">
      <div class="text text--offer text--reverse text--uppercase">
        30% OFF
      </div>
      <div class="text text--700 text--red text--uppercase">
        FOR WOMEN
      </div>
    </div>
  </div>
  <div class="offer__item offer__item--man">
    <img
      src="img/offer_man.jpg"
      alt=""
      class="offer__img offer__img--man"
    />
    <div class="offer__text">
      <div class="text text--offer text--reverse text--uppercase">
        HOT DEAL
      </div>
      <div class="text text--700 text--red text--uppercase">FOR MEN</div>
    </div>
  </div>
  <div class="offer__item offer__item--kids">
    <img
      src="img/offer_kids.jpg"
      alt=""
      class="offer__img offer__img--kids"
    />
    <div class="offer__text">
      <div class="text text--offer text--reverse text--uppercase">
        NEW ARRIVALS
      </div>
      <div class="text text--700 text--red text--uppercase">FOR KIDS</div>
    </div>
  </div>
  <div class="offer__item offer__item--accessories">
    <img
      src="img/offer_accesories.jpg"
      alt=""
      class="offer__img offer__img--accessories"
    />
    <div class="offer__text">
      <div class="text text--offer text--reverse text--uppercase">
        LUXIROUS & TRENDY
      </div>
      <div class="text text--700 text--red text--uppercase">
        ACCESORIES
      </div>
    </div>
  </div>
</div>
`,
});
