<template>
    <div class="infoContainer">
        <img src="./images/moreProductImg.jpg">
        <div class="info">
            <a href="#" class="title">Samsung allienware 144hz AW251HF</a>
            <p class="price" style="font-weight:bold;">$355.0</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.infoContainer{
    display: flex;
    padding: 15px 0 5px 0;
}
img{
    width: 60px;
    height: 60px;
}
.info{
    display: flex;
    flex-direction: column;
    margin-right: 5px;
}
.title{
    color: #26a7ca;
    text-decoration: none;
    line-height: 1.3;
    margin-top: 0.1em;
    margin-bottom: 5px;
    font-size: 15px;
}
.title:hover{
    color: #000;
}
</style>