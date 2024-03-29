/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('announce-event', require('./components/AnnounceEvent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('nav-component', require('./components/NavBarComponent.vue').default);
Vue.component('preview-display', require('./components/PreviewDisplay.vue').default);
Vue.component('item-component', require('./components/ItemComponent.vue').default);
Vue.component('feature-component', require('./components/featureItemComponent.vue').default);
Vue.component('feature-contact', require('./components/featureAndContact.vue').default);
Vue.component('more-product', require('./components/moreProduct.vue').default);
Vue.component('more-product-items', require('./components/moreProductItem.vue').default);
Vue.component('pop-up', require('./components/popUpHeader.vue').default);
Vue.component('product-container', require('./components/ProductContainer.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import Vue from 'vue'
 import VueAgile from 'vue-agile'
 
 Vue.use(VueAgile)
 
const app = new Vue({
    el: '#app',
});
