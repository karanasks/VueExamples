Vue.component('my-product-comp', {
    template: `<div class="product">

    <div class="product-image">
        <img v-bind:src="image"> 
    </div>
    <!-- 'image' above is the expression -->
    <!-- shorthand for v-bind
    :alt="description"
    :href="url"
    :title="toolTip"
    :class="isActive"
    :style="isStyled"
    :disabled:"isDisabled"
    -->

    <div class="product-info">
        
        <h1>{{title}}</h1>
        
        <p v-if="inventory>10">In Stock</p>
        <p v-else-if="inventory>0 && inventory<10">Almost Gone!</p>
        <p v-else>Out of Stock</p>
    
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
    
        <!-- Set the color of box using the color from variant data -->
        <div v-for="(variant, index) in variants" :key="variant.variantId" :id="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">                        
        </div>

        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>

        <!-- Apply disable attribute when inStock evaluates to false -->
        <!-- Apply disabledButton class when variable inStock evaluates to false -->
        <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock, lineThrough: !inStock }">Add to Cart</button>                   
    </div>
    
</div>`,
    data() {
        return {     
            product: 'Shoes',
            //image: 'Content/assets/images/red-shoe.png',
            //inStock: true,
            inventory: 0,
            details: ['80% cotton', '20% polyster', 'Gender-neutral'],
            variants: [{
                variantId: 1111,
                variantColor: 'Red',
                variantImage: 'Content/assets/images/red-shoe.png',
                variantQuantity: 0
            },
            {
                variantId: 1112,
                variantColor: 'Blue',
                variantImage: 'Content/assets/images/blue-shoe.png',
                variantQuantity: 10
            },
            {
                variantId: 1113,
                variantColor: 'Black',
                variantImage: 'Content/assets/images/black-shoe.png',
                variantQuantity: 4
            }],
            cart: 0,
            brand: 'Nike',
            selectedVariant: 0
        }
    },
    methods:{
        //way 1 for writing methods
        addToCart() {
            this.cart += 1;
            if(this.cart>0){
                this.inStock = true;
            }else{
                this.inStock = false;
            }
        },
        //way 2 for writing methods
        removeFromCart: function() {
            this.cart -= 1;
            if(this.cart>0){
                this.inStock = true;
            }else{
                this.inStock = false;
            }
        },
        //method with parameter
        updateProduct(index) {
            this.selectedVariant = index;
            //this.image = index;
            console.log(index);
        }
    }, 
    //Computed Properties
    computed:{
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
})

const app = new Vue({
    el: '#app'
});  