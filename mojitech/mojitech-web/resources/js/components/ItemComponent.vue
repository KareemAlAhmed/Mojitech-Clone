<template>
    <div class="itemComponent">
        <slot></slot>
        <span class="categorie">MONITOR</span>
        <a href="#" class="title">Samsung allienware 144hz AW251HF</a>
        <p class="price" style="font-weight:bold;">$355.0</p>
    </div>
</template>

<script>
    export default {
        props:{
            img:URL
        }
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