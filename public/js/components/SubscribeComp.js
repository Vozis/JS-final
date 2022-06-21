Vue.component("subscribe-comp", {
  template: ` <div class="subscribe">
  <div class="subscribe__inner container">
    <div class="subscribe__item subscribe__item--quote">
      <img src="img/IMG_0103.JPG" alt="" class="subscribe__img" />
      <p class="text subscribe__quote">
        <q
          >Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
          <i>pulvinar purus condimentum</i>
        </q>
      </p>
    </div>
    <div class="subscribe__item subscribe__item--form">
      <p class="subscribe__heading text text--700 text--uppercase">
        SUBSCRIBE
      </p>
      <p class="subscribe__text text text--uppercase">
        FOR OUR NEWLETTER AND PROMOTION
      </p>
      <form action="#" class="subscribe__email-input">
        <input
          type="email"
          class="input subscribe__input"
          placeholder="Enter Your Email"
        />
        <input
          type="button"
          class="text--reverse subscribe__btn"
          value="Subscribe"
        />
      </form>
    </div>
  </div>
</div>`,
});
