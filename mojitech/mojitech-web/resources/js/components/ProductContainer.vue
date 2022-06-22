<template>
    <div class="BigContainer" style="padding: 0 425px;">
        <div class="product-main" style="padding-bottom:40px;">
            <div class="productImg" style="position:relative;">
                <img src="./images/AW2521HF1.jpg">
                <div class="" id="zoom" style="">
                    <a href="#" class="zoom" style="color:silver;">
                        <i class="fa fa-expand expand" ></i>
                    </a>
                 </div>
            </div>
            <div class="infoSummary">
                <p class="title">{{product.name}}</p>
                <p class="price">${{product.price}}</p>
                <form method="POST" style="display:flex;gap: 20px;">
                    <div class="quantity buttons_added" style="display:flex;">
                        <input type="button" value="-" class="button down" @click="remove">				
                        <label class="label1" for="quantity">{{product.name}}</label>
                        <input type="number" ref="inp" id="quantity" class="input-text " step="1" min="1" max="" name="quantity" v-model.number="Inpvalue" title="Qty" size="4" placeholder="" inputmode="numeric">
				        <input type="button" value="+" class="button up" @click=" add">	
                    </div>
                    <button class="addCart">ADD TO CART</button>
                </form>
                <div style="margin-top: 1.3em;padding-bottom: 20px;">
                    <a href="#" class="request-quote link"> Request Quote</a>
                </div>
                <a href="#" class="compare"> COMPARE</a>
                <div style="margin-bottom: 1em;">
                    <p style="border-top: 1px dotted #ddd;padding: 5px 0;font-size: .8em;">Categories: <a href="#" id="categorie">Valentine's</a>, <a href="#" id="categorie">Monitors</a></p>
                </div>
                <div class="socialMedia" style="display:flex;">
                    <a href="#" class="social ">
                        <span class="socialIcon facebook" > <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"></path></svg></span>
                    </a>
                    <a href="#" class="social">
                        <span class="socialIcon twitter" ><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a9.913 9.913 0 01-2.828.775 4.93 4.93 0 002.166-2.725 9.738 9.738 0 01-3.13 1.194 4.92 4.92 0 00-3.593-1.55 4.924 4.924 0 00-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 00-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 01-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 004.6 3.42 9.893 9.893 0 01-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 007.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"></path></svg></span>
                    </a>
                    <a href="#" class="social">
                        <span class="socialIcon email" ><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M26 21.25v-9s-9.1 6.35-9.984 6.68C15.144 18.616 6 12.25 6 12.25v9c0 1.25.266 1.5 1.5 1.5h17c1.266 0 1.5-.22 1.5-1.5zm-.015-10.765c0-.91-.265-1.235-1.485-1.235h-17c-1.255 0-1.5.39-1.5 1.3l.015.14s9.035 6.22 10 6.56c1.02-.395 9.985-6.7 9.985-6.7l-.015-.065z"></path></svg></span>
                    </a>
                    <a href="#" class="social">
                        <span class="socialIcon wats" ><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.241 11.241 0 005.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292zm0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.345 9.345 0 01-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4 5.183 0 9.397 4.22 9.397 9.4 0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055-.158-.295 0-.445.15-.584.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297.266-.664.287-1.24.22-1.363-.07-.123-.26-.203-.54-.357z"></path></svg></span>
                    </a>
                    <a href="#" class="social">
                        <span class="socialIcon gmail" ><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" opacity=".25" d="M4.958 6.569h22.338V25.43H4.958z"></path><path d="M28.709 7.321a1.7 1.7 0 00-1.409-.752h-.077l-1.1.8-.082.06-9.952 7.271L5.961 7.3l-1-.733H4.7A1.7 1.7 0 003 8.273v15.454a1.676 1.676 0 00.069.481A1.7 1.7 0 004.7 25.431h1.261V11.36l7.35 5.368 2.416 1.764.445.326 2.778-2.029 7.088-5.177v13.819H27.3a1.7 1.7 0 001.634-1.223 1.675 1.675 0 00.066-.481V8.273a1.7 1.7 0 00-.291-.952z" fill="#fff"></path></svg></span>
                    </a>
                    <a href="#" class="social">
                        <span class="socialIcon more" ><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#FFF"><path d="M14 7h4v18h-4z"></path><path d="M7 14h18v4H7z"></path></g></svg></span>
                    </a>

                </div>
            </div>
        </div>
        <div class="product-description" style="border-top: 1px solid #ececec;padding-bottom:30px;">
            <p class="desc">DESCRIPTION</p>
            <div class="text" style="padding:30px 0 0;font-size: 0.9em;letter-spacing: 0.02em;">
               <div class="topContent">
                    <p>{{product.description}}</p>
                    <p><strong>Lightning-fast:</strong>&nbsp;Experience the best available in IPS Technology with native refresh rates of up to 240Hz.</p>
                    <p><strong>1ms response. No gimmicks:</strong>&nbsp;A true 1ms response time blasts away ghosting and blurs for clear images with no artificial tricks needed.</p>
               </div>
                <div class="bottomContent">
                    <h2>The ultimate color coverage</h2>
                    <p><strong>True colors, real speed:</strong>&nbsp;New, fast IPS technology helps maintain image clarity from every angle of the screen. Plus, with up to 99% sRGB color coverage, you have a wide array of colors in your arsenal.</p>
                    <p><strong>Best of both worlds:&nbsp;</strong>A 24.5” monitor combined with native FHD 1080p resolution provides the best pixel-per-inch ratio, so details are clearer and images are life-like, making the 24.5” form factor the ideal size for high speed gaming.</p>
                </div>
            </div>
            <a href="#" class="link">Manufacturer's Link</a>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                Inpvalue:1,
            }
        },
        mounted(){
                axios.get('/api/product')
                    .then(resources => {this.products = resources.data})
                    .catch(error => console.log(error))
        },
        methods:{
            add(){
                this.Inpvalue +=1 
                console.log(this.Inpvalue)          
            },
            remove(){
                if(this.Inpvalue > 1){
                   this.Inpvalue-=1
                }
            }
        },props:[
            'product'
        ]
    }
</script>

<style scoped>
    .product-main{
        display: flex;
    }
    .title{
        color: #555555;
        font-size: 1.7em;
        line-height: 1.3;
        font-weight: bold;
        position: relative;
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
    .infoSummary{
        padding: 10px 15px;
    }
    .price{
        font-size: 1.5em;
        line-height: 1;
        margin: 32px 0 15px;
        font-weight: 600;
    }
    .addCart
    ,.compare{
        width: fit-content;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 19px;
        background-color: #26a7ca;
        font-weight: bold;
        color: white;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    .addCart:hover,
    .compare:hover{
        outline: none;
        opacity: 1;
        color: #fff;
        box-shadow: inset 0 0 0 100px rgb(0 0 0 / 20%);
    }
    .compare{
        background-color: #76c7e2;
        margin-bottom: 1em;
    }
    .label1{
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
    }
    .button{
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        overflow: hidden;
        position: relative;
        background-color: #f9f9f9;
        text-shadow: 1px 1px 1px #fff;
        color: #666;
        border: 1px solid #ddd;
        text-transform: none;
        font-weight: normal;
        padding-left: 0.5em;
        padding-right: 0.5em;  
        height:100% ;
        cursor:pointer;
    }
    .button:hover{
        color: #000;
    background-color: #f1f1f1;
    }
    .up{
        border-left: 0 !important;
    }
    .down{
        border-right: 0 !important;
    }
    .input-text{
        max-width: 2.5em;
        width: 2.5em;
        text-align: center;
        border-radius: 0 !important;
        padding-left: 0;
        padding-right: 0;
        display: inline-block;
        vertical-align: top;
        margin: 0;
        box-shadow: inset 0 -1.8em 1em 0 rgb(0 0 0 / 0%);
        height:100%;
        box-sizing: border-box;
        border: 1px solid #ddd;
        padding: 0 0.75em;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .link{
        color: #26a7ca;
        text-decoration: none;
        line-height: 1.3;
        margin-top: 0.1em;
        margin-bottom: 0.1em;
        font-size: 16px;
    }
    .link:hover{
        color: #000;
    }
    #categorie{
        color: #26a7ca;
        text-decoration: none;
        line-height: 1.3;
        margin-top: 0.1em;
        margin-bottom: 0.1em;
    }
    #categorie:hover{
        color: #000;}
    .social{
        font-size: 32px;
        border: 0;
        box-shadow: none;
        display: inline-block;
        padding: 0 4px;
        vertical-align: middle;
    }
    .socialIcon{
        background-color: rgb(24, 119, 242);
        height: 32px;
        line-height: 32px;
        width: 32px;
        border-radius: 4px;
        display: inline-block;
        opacity: 1
    }
    .socialIcon:hover{
        opacity: 0.5;
    }
    .twitter{
        background-color: rgb(29, 155, 240);
    }
    .email{
        background-color: rgb(1, 102, 255);
    }
    .wats{
        background-color: rgb(18, 175, 10);
    }
    .gmail{
        background-color: rgb(221, 83, 71);
    }
    .more{
        background-color: rgb(1, 102, 255);
    }
    .expand{
        font-size: 1.2em;
    }
    #zoom{
        position:absolute;
        border: 2px solid silver;
        padding: 6px;
        border-radius: 66px;
        bottom:25px;
        color:silver;
        cursor:pointer;
    }
    #zoom:hover
    {
        background-color: #76c7e2;
        border-color: #76c7e2;
    }
    #zoom:hover .expand{
        color:white;
    }
    .text p{
        margin-bottom: 1.8em;
    }
    h2{
        color: #555555;
        font-size: 1.6em;
        line-height: 1.3;
        width: 100%;
        margin-top: 0;
        margin-bottom: 0.5em;  
    }
    .desc{
        color: rgba(17,17,17,.85);
        font-weight: 700;
        font-size: .8em;
        letter-spacing: .02em;
        padding: 10px 0 0;
        position:relative;
        width: fit-content;
    }
    .desc::before{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        background-color: #76c7e2;
    }
</style>