const app = new Vue({
    el: "#app",
    data: {
      products: [
        { id: 1, title: "TAG 1000 (TAG 853)", short_text: "Hot Pepper - Mild", image: "pepper1.jpg", desc: "Повний опис товару 1", heat: "5000 Scoville" },
        { id: 2, title: "TAG 1001 (TAG 855)", short_text: "Medium Spicy Pepper", image: "pepper2.jpg", desc: "Повний опис товару 2", heat: "15000 Scoville" },
        { id: 3, title: "TAG 1002 (TAG 809)", short_text: "Extra Hot Chili", image: "pepper3.jpg", desc: "Повний опис товару 3", heat: "50000 Scoville" },
        { id: 4, title: "TAG 1003 (TAG 834)", short_text: "Super Hot Pepper", image: "pepper4.jpg", desc: "Повний опис товару 4", heat: "100000 Scoville" },
        { id: 5, title: "TAG 1004 (TAG 848)", short_text: "Extreme Heat", image: "pepper5.jpg", desc: "Повний опис товару 5", heat: "1000000 Scoville" }],
        product: {},
        btnVisible: 0
    },
    mounted:function() {
        this.getProduct();
        this.checkInCart();
    },
    methods: {
        getProduct:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0) {
                    for (i in this.products) {
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) {
                            this.product=this.products[i];
                        }
                    }
                }
            }
        },
        addToCart:function(id){
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) {
                this.btnVisible = 1;
            }
        }
    }
});