<template>
    <div style="display: flex;">
        <div class="itemComponent" v-for="product in products.data" v-bind:key="product.key">
            <input type="hidden" value="/Product">          
            <a :href="'/products/'+product.slug" class="img"><img src="./images/monitor.jpg"></a>
            <span class="categorie">{{product.category}}</span>
            <a :href="'/products/'+product.slug" class="title">{{product.name}}</a>
            <p class="price" style="font-weight:bold;">${{product.price}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{product:{type:String}},
        mounted(){
                if(this.product != ""){
                        axios.get('/api/search/'+ this.product)
                            .then(resources => {this.products = resources.data})
                            .catch(error => console.log(error))
                }else{
                    axios.get('/api/product')
                        .then(resources => {this.products = resources.data})
                        .catch(error => console.log(error))
                }
        },
        data(){
            return{
                products:[]
            }
        },
        
    }
</script>

<style scoped>
    .itemComponent{
        width:214px;
        height: 372px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 10px;
        text-align: center;
    }
    img{
        width: 193px;
    }
    .categorie{
    font-size: .75em;
    line-height: 1.2;
    text-transform: uppercase;
    color: rgb(51, 51, 51);
    font-weight: 400;
    }
    .title{
        color: #26a7ca;
        text-decoration: none;
        line-height: 1.3;
        margin-top: 0.1em;
        margin-bottom: 0.1em;
        font-size: 15px;
    }
    .title:hover{
        color: #000;
    }
    </style>