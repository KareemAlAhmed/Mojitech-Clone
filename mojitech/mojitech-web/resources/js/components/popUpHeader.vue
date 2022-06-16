<template>
<div class="show">
        <div class="headerPopUp" v-show="show" :style="scrolled >= 1240 ? trans : null">
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
        created () {
            window.addEventListener('scroll', this.handleScroll);
         },
        data() {
            return {
            show: false,
            scrolled:window.scrollY,
            trans:{
                transform: 'translateY(230px)'
            }
            };
        },
        methods: {
            handleScroll (event) {
                this.scrolled =window.scrollY
                if(this.scrolled > 1235){
                    this.show = true
                }
                if(this.scrolled === 234){
                    this.show = false
                }
                console.log(this.scrolled)
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

  