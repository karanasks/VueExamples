const app = new Vue({
    el: '#app', 
    data: {     
        product: 'Shoes',
        image: 'Content/assets/images/red-shoe.png',
        inStock: true,
        inventory: 0,
        details: ['80% cotton', '20% polyster', 'Gender-neutral'],
        variants: [{
            variantId: 1111,
            variantColor: 'Red',
            variantImage: 'Content/assets/images/red-shoe.png'
        },
        {
            variantId: 1112,
            variantColor: 'Blue',
            variantImage: 'Content/assets/images/blue-shoe.png'
        },
        {
            variantId: 1112,
            variantColor: 'Black',
            variantImage: 'Content/assets/images/black-shoe.png'
        }],
        cart: 0
    },
    methods:{
        addToCart() {
            this.cart += 1;
        },
        removeFromCart: function() {
            this.cart -= 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
});  