const app = new Vue({
    el: '#app', 
    data: {     
        product: 'Socks',
        image: 'Content/assets/images/socks-green-on-white.jpg',
        inStock: true,
        socksInventory: 0,
        details: ['80% cotton', '20% polyster', 'Gender-neutral'],
        variants: [{
            variantId: 1111,
            variantColor: 'Green'
        },
        {
            variantId: 1112,
            variantColor: 'Blue'
        }]
    }
});  