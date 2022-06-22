<template>
    <div class="featureItem">
        <div class="photo">
            <slot></slot>
        </div>
        <div class="information">
            <a href="/Product" class="title">DELL G15 SE – I7 16GB RAM 1TB NVME RTX 3060 15.6″</a>
            <p class="price" style="font-weight:bold;font-size: 1.5em;margin: 0.5em 0;">$355.0</p>
            <p class="categorie">Category:<span class="catName">{{Category}}</span></p>
            <a href="/Product" class="readmore">READ MORE </a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                Category:'Laptop'
            }
        }
    }
</script>

<style scoped>
    .featureItem{
        width: 100%;
        height: 500px;
        display: flex;
        box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    }
    .photo{
        width: 50%;
        height: 100%;
    }
    .information{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 30px 30px;
    }
    .categorie{
        font-size: .8em;
        line-height: 1;
        color: rgb(51, 51, 51);
        font-weight: 400;
        border-top: 1px dotted #ddd;
        padding: 8px 0;
    }
    .title{
        position: relative;
        color: #26a7ca;
        text-decoration: none;
        margin-top: 0.1em;
        margin-bottom: 14px;
        font-size: 1.7em;
        font-weight: bold;
        line-height: 1.3;
    }
    .title::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        left: 0%;
        bottom: -17px;
    background-color: rgba(0,0,0,.1);
    }
    .title:hover{
        color: #000;
    }  
    .readmore{
        width: 129px;
        height: 40px;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 19px;
        background-color: #76c7e2;
        font-weight: bold;
        margin-top: 12px;
        color: white;
    }
    .readmore:hover{
        outline: none;
        opacity: 1;
        color: #fff;
        box-shadow: inset 0 0 0 100px rgb(0 0 0 / 20%);
    }
    .catName{
        color:#26a7ca;
        margin-left: 3px;
    }
    .catName:hover{
        color: #000;
    } 
</style>