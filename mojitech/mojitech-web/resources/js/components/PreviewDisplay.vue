<template>
  <div class="preview">     
    <agile :initial-slide="3" :autoplay="true" :dots="false" :navButtons="false" :autoplaySpeed="5000"	>
      <img class="slide" src="./images/preview1.jpeg" />
      <img class="slide" src="./images/preview2.jpeg"/>
      <img class="slide" src="./images/preview4.jpeg" />
      <img class="slide" src="./images/preview5.jpeg" />       
    </agile>
    <featureAndContact />
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
  import featureAndContact from './featureAndContact.vue'
    export default {
        components: {
            agile: VueAgile,
            featureAndContact 
        }
    }
</script>

<style scoped>
.preview{
  margin-top: 25px;
  margin-bottom: 70px;
}
.featureAndContact{
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 15px;
  background-color: rgb(241, 241, 241);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
}

.slide {
  display: block;
  height: 400px;
  object-fit: cover;
  width: 100%;
  cursor: grab; 
}
.feature{
  height: 100%;
  width: 350px;
  position: relative;
  display: flex;
  margin-right: 20px;
}
.feature img{
  width:20px;
  height: 20px;
  margin-right: 16px;
}
.box{
  font-size: 14px;
  color: #333333;
}
.border::before{
  position: absolute;
  content: " ";
  height: 100%;
  top: 0;
  left: -30px;
  border-left: 1px dashed #ddd;
}


</style>