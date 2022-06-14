<template>
  <div class="header">
    <div class="logo" style="margin-right: 50px;">
      <slot name="logo"></slot>
    </div>
    <div class="search">
      <div style="position:relative;">
        <button @click="change" style="display: flex;padding: 8px;font-size: 0.875rem;border-color: rgba(0,0,0,.09);text-align: left;border-radius: 13px;align-items:center;gap:5px">
          All
          <i class="arrow down"></i>
        </button>
        <div v-if="show === true" style=" overflow: auto; height: 150px;position: absolute; z-index: 50; padding-top: 0.5rem;padding-bottom: 0.5rem; margin-top: 0.5rem; background-color: #F3F4F6; width: 120px; border-radius: 0.75rem; ">
          <a href="#" class="link" >Hello</a>
          <a href="#" class="link" >Hello</a>
          <a href="#" class="link" >Hello</a>
          <a href="#" class="link" >Hello</a>
          <a href="#" class="link" >Hello</a>
        </div>
      </div>
      <div style="flex: 1;" class="searchInput">
        <form method="GET" style="display: flex;flex: 1 0;background-color: rgb(243, 244, 246);border: 2px solid;border-color: rgba(0, 0, 0, 0.09);border-radius: 0.75rem;align-items: center;">
            <input  type="search" name="search" placeholder="Search..." style="outline:none;background-color: transparent;font-weight: 600;color: rgb(0, 0, 0);display: flex;position: relative;padding: 0.5rem 0.75rem;background-color: rgb(243, 244, 246);align-items: center;border-radius: 0.75rem;width:100%;border:none;"/>
            <img src="./images/search.png" >
        </form>
      </div>
    </div>
    <div class="otherOptions">
        <img src="./images/like.png" >
        <div style="width:20px;height:20px;margin:0 20px;position:relative;" class="user"><img src="./images/user.png" class="user" style="position: relative;"></div>
        <img src="./images/cart.png" >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 425px;
  height: 128px;
}
.logo img {
  width: 170px;
  height: 85px;
}
.search {
  display: flex;
  gap: 5px;
  flex: 1 0;
  border: none;
}
.searchInput img{
  width: 29px;
  height: 27px;
}
.link{
  display: block; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  font-size: 0.875rem;
  line-height: 1.25rem; 
  line-height: 1.5rem; 
  text-align: left; 
  color: black;
  text-decoration: none;

}
.link:hover{
  background-color: #3B82F6; 
  color: #ffffff; 
}
.otherOptions{
  display: flex;
  margin-left: 65px;
}
.otherOptions img{
  width: 20px;
  height: 20px;

}
img{
  cursor: pointer;
}
.user::before{
  content: "";
  height: 100%;
  width: 2px;
  position: absolute;
  left: -10px;
  background-color: rgba(0,0,0,.1);
}
.user::after{
  content: "";
  height: 100%;
  width: 2px;
  position: absolute;
  right:-10px;
  background-color: rgba(0,0,0,.1);
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
</style>