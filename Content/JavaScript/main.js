const app = new Vue({
    el: '#app', 
    data: {     
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
});  