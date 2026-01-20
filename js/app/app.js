import {router} from './router.js'

document.addEventListener('DOMContentLoaded', function() {
    const main = {
        data() {
            return {
                url:"",
                user: {name:"", phone:"", email:"", date:"", auth:""},
                formData: {},
                title: "",
                date: "",
                time: "",
            }
        },
        watch:{
            $route: function() {
                this.init();
            }
        },
        mounted: function() {
            this.init();
        },
        methods:{
            init() {
                var self = this;

                router.isReady().then(() => {
                    self.page('/');
                });
            },
            logout() {
                this.user = {name:"", phone:"", email:"", date:"", auth:""};
                this.page('/');
                window.localStorage.setItem('user', '');
            },
            page: function(path="") {
                this.$router.replace(path);
                this.title=this.$route['name'];
                document.title=this.$route['name'];
            },
            toFormData: function(obj) { }
        }
    };

    var app = Vue.createApp(main)
    .use(router)
    .mount('#content')
});
