// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component("cart", {
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
  mounted() {
    this.$root.getJson(`/api/cart`).then((data) => {
      for (let item of data.contents) {
        this.$data.cartItems.push(item);
      }
      // console.log(this.cartItems);
    });
  },
  methods: {
    addProduct(item) {
      let find = this.cartItems.find((el) => el.id_product === item.id_product);
      if (find) {
        this.$root
          .putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity++;
            }
          });
      } else {
        // const prod = Object.assign({ quantity: 1 }, item);
        this.$set(item, "quantity", 1);
        this.$root.postJson(`/api/cart`, item).then((data) => {
          if (data.result === 1) {
            this.cartItems.push(item);
          }
        });
      }
    },
    remove(item) {
      if (item.quantity > 1) {
        this.$root
          .putJson(`/api/cart/${item.id_product}`, {
            quantity: -1,
          })
          .then((data) => {
            if (data.result === 1) {
              item.quantity--;
            }
          });
      } else {
        this.$root
          .delJson(`/api/cart/${item.id_product}`, item)
          .then((data) => {
            if (data.result) {
              this.cartItems.splice(this.cartItems.indexOf(item), 1);
            } else {
              console.log("error");
            }
          });
      }
    },
  },
  template: `<div class="cart-list">
<button class="cart-list__btn" type="button" @click="showCart = !showCart">
<img
src="img/basket.svg"
alt="cart"
/>
<span class="cart-list__badge">{{this.cartItems.reduce((summ, item) => summ + item.quantity, 0)}}</span>
</button>
<div class="cart-list__body" v-show="showCart">
        <h2 v-if="cartItems.length === 0" class="cart-list__emty">Корзина пуста</h2>
        <div  v-else class="cart-list__items">
            <cart-item 
            v-for="item of cartItems" 
            :key="item.id_product" 
            :img="item.imgPath" 
            :cart-item="item"
            @remove-product="remove"
            >
            </cart-item>
        </div>
        <div class="cart-list__result">
        <p class="cart-list__totalprice">Общая стоимость: {{this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0)}} $</p>
        <p class="cart-list__totalcount">Итого товаров: {{this.cartItems.reduce((summ, item) => summ + item.quantity, 0)}} шт.</p>
</div>
        </div>
        </div>
    `,
});

Vue.component("cart-item", {
  props: ["cart-item"],
  template: `
    <div class="cart-list__item item-cart">

                    <div class="item-cart__info">
                            <div class="item-cart__title">{{ cartItem.product_name }}</div>
                            <div class="item-cart__quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="item-cart__price">$ {{ cartItem.price }} each</div>
                    </div>
                    <div class="item-cart__result">
                        <div class="item-cart__totalprice">{{cartItem.quantity*cartItem.price}} $</div>
                        <button class="item-cart__btn" @click="$emit('remove-product', cartItem)">&times;</button>
                    </div>
                </div>
    `,
});
