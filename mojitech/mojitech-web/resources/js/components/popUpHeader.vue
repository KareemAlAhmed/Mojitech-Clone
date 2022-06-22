<template>
<div class="show">
        <div class="headerPopUp" v-show="show" :style="scrolled >= helo ? trans : null">
        <Annouce />
        <Header >
            <template v-slot:logo>
                <img src="./images/logo.png">
            </template>
        </Header>
        <NavBar />
    </div>
</div>
</template>

<script>
    import  Annouce  from './AnnounceEvent.vue';
    import  Header from './HeaderComponent.vue';
    import  NavBar  from './NavBarComponent.vue';
    export default {
        components:{
            Annouce,
            Header,
            NavBar
        },
        props:{
            helo:Number
        }
            
        ,
        created () {
            window.addEventListener('scroll', this.handleScroll);
            console.log(typeof this.helo)
         },
        data() {
            return {
            show: false,
            scrolled:window.scrollY,
            min:0,
            trans:{
                transform: 'translateY(230px)'
            }
            };
        },
        methods: {
            handleScroll (event) {
                this.scrolled =window.scrollY
                this.min = this.helo - 5
                if(this.scrolled > this.min){
                    this.show = true
                }
                if(this.scrolled === 234){
                    this.show = false
                }
                console.log(this.min)
            }
        },
    }
</script>

<style  scoped>
    .headerPopUp{
    position: fixed;
    top: -230px;
    z-index: +99;
    background-color: white;
    transition: all 1s ease;
    padding: 0 0 10px;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 15%)
    }

</style>

  