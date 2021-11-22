Vue.component("productDetails",{
    props: {
        details:{
            type: String,
            name: 'Ibrahim salim kobi',
            required: true
        }
    },
    template: `
    <ul>
      <li>{{ name }}</li>
    </ul>
  `
})

// Vue.component('product-details', {
//     props: {
//       details: {
//         type: Array,
//         required: true
//       }
//     },
//     template: `
//       <ul>
//         <li v-for="detail in details">{{ detail }}</li>
//       </ul>
//     `
//   })


Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: ` 
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image"  alt="">
            </div>
            <div class="product-info">
                <h1> {{title}}</h1>
                <p v-if="onSale">On sale</p>
                <p v-else :class="{ outOfStock:! onSale }">Out of stock</p>
                <p>{{sale}}</p>
                <p> Shipping:  {{ shipping }}<p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
            
                </div>

                <ul>
                    <li v-for="size in sizes">{{size}}</li>
                </ul> 

                <button v-on:click="addToCart" 
                :disabled="!onSale"
                :class="{ disabledButton:!onSale}"
                >Add to cart </button>
                <button v-on:click="removeFromCart">Remove from cart </button>
                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>

                <!--  -->
                <div>
                    <p v-if="inStock">{{inStock}}</p>
                    <p v-else></p>
                </div>
                <!-- <p v-show>none</p> -->
                <!-- <p v-if="inventory > 20">available</p>
                <p v-else-if="inventory > 10 && inventory < 20">won't be available for long</p>
                <p v-else-if="inventory <= 9 && inventory > 0">Almost out</p> -->
                <!-- <p v-else>Out of stock</p> -->
            </div>
        </div> `,
        data() {
            return{
                brand: 'Mastery me',
                product: "Socks",
                selectedVariant: 0,
                call: "08101307553",
                url: "https://www.amazon.com/s?k=socks&ref=nb_sb_noss",
                details: ["80% cotton","20% cotton","Gender-neutral"],
                variants:[{
                    variantId:2234,
                    variantColor:"green",
                    variantImage: './assets/vmSocks-green-onWhite.jpeg',
                    variantQuantity: 10
                },
                {
                    variantId:2235,
                    variantColor:"blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpeg',
                    variantQuantity: false
                }],
                sizes: [20, 40, 60, 80],
                cart: 0  
            }
        },
        methods: {
            addToCart: function(){
                this.cart += 1
            }, 
            removeFromCart: function(){
              if(this.cart > 0){
                this.cart --
              }else {
                  this.cart = 0
              } 
            },
            updateProduct: function (index){
                this.selectedVariant = index
                console.log(index)
            }
        },
        computed: {
            title(){
                return this.brand + " " + this.product
            },
            image(){
                return this.variants[this.selectedVariant].variantImage
            },
            onSale(){
                return this.variants[this.selectedVariant].variantQuantity
            },
            sale() {
                if (this.onSale) {
                  return this.brand + ' ' + this.product + ' are on sale!'
                }else{ 
                  return  this.brand + ' ' + this.product + ' are not on sale'
                }
            },
            shipping() {
                if(this.premium){
                    return "Free"
                }else{
                    return 2.99
                }
            }
        },


})



let k = new Vue ({
    el: "#app",
    data: {
        premium: true,
        name: "ibrahim Salim kobi"
    }
})