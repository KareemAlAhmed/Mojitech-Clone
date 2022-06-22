<template>
    <div class="moreProduct">
        <div class="first line">
            <p class="lineName">LATEST</p>
            <div class="productContainer">
                <more-product-items></more-product-items>
                <more-product-items></more-product-items>
                <more-product-items></more-product-items>
            </div>
        </div>
        <div class="second line">
            <p class="lineName">BEST SELLING</p>
            <div class="productContainer">
                <more-product-items></more-product-items>
                <more-product-items></more-product-items>
            </div>
        </div>
        <div class="third line">
            <p class="lineName">FEATURED</p>
            <div class="productContainer">
                <more-product-items></more-product-items>
                <more-product-items></more-product-items>
                <more-product-items></more-product-items>
                <more-product-items></more-product-items>
            </div>
        </div>
        <div class="fourth line">
            <p class="lineName">TOP RATED</p>
            <div class="productContainer">
                <more-product-items></more-product-items>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .moreProduct{
        margin-bottom: 15px;
        width: 100%;
        flex: 1;
        padding: 0 425px;
        display: flex;
    }
    .line{}
    .lineName{
        font-weight: bold;
        padding-bottom: 6px;
        position:relative;
        line-height: 1.05;
        letter-spacing: .05em;
    }
    .lineName::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        left: 0%;
        bottom: -17px;
        background-color: rgba(0,0,0,.1);
    }
    .productContainer{
        margin-top: 35px;
    }
    .infoContainer + .infoContainer{
    border-top: 1px solid #ececec;
}


    
</style>