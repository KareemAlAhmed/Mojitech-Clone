<template>
    <div class="nav">

        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" class="first" >Apple Product <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Desktops <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Accessories <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track">Black Deal <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
           <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Computer Parts <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Electronic <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Networking <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Plug-ins <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Gaming Console <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Mining <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Servers <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Software <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >About Us <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        <div @mouseleave=" remove">
            <a href="#" @mouseover=" track" >Contact Us <div style="display: inline-block;transform: translateY(-3px);"><i class="arrow down"></i></div></a>
            <div  class="disactive">
                SHOWNNNN 
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'NavBar',
        data(){
            return{
                show:false,

            }
        },
        methods:{
            track(event){
                if(event.target.nextElementSibling.classList.contains('disactive')){
                    event.target.nextElementSibling.classList.remove('disactive')
                    event.target.nextElementSibling.classList.add('active')
                    console.log(`r`)
                }
                else{

                    event.target.nextElementSibling.classList.add('active')
                }
            },
            remove(event){
                event.target.lastElementChild.classList.remove('active')
                event.target.lastElementChild.classList.add('disactive')
            }
        }
    }
</script>

<style scoped>
    .nav{
        width: calc( 100% - 150px);
        display: flex;
        flex-wrap: wrap;
        padding: 0 425px;
        row-gap: 15px;
    }
     a{
        text-decoration: none;
        color: #666666;
        font-size:0.8em;
        font-weight: bold;
        padding: 18px;
     }
    .secret{
        visibility: visible;
        transition: all 0.1s ease-in 0.1s;
    }
    .active{
        display: block;
                overflow: auto;
         height: 150px;
         position: absolute;
          z-index: 50;
           padding-top: 0.5rem;
           padding-bottom: 0.5rem;
            margin-top: 0.5rem; 
            background-color: #F3F4F6;
         width: 120px;
          border-radius: 0.75rem;
    }
    .disactive{
        display: none;

    }
    .arrow {
    border: solid #666666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    }
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.first{
    padding-left: 0;
}

</style>