<template>
    <div class="featureAndContact">
      <div class="feature">
        <img src="./images/delivery.png">
        <div class="box">
          <strong>Free Delivey</strong>
          <p style="margin-top: 9px;">Same Day Up To 72 hours (Working Days)</p>
        </div>
      </div>
      <div class="feature border">
        <img src="./images/credit-card.png">
        <div class="box">
          <strong>Payement Methods</strong>
          <p style="margin-top: 9px;">Cash on delivery or intl, Credit cards</p>
        </div>
      </div>
      <div class="feature border">
        <img src="./images/phone.png">
        <div class="box">
          <strong>Hotline</strong>
          <p style="margin-top: 6px;">+961 1 693 444</p>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name:"featureAndContact"
    }
</script>

<style scoped>
.featureAndContact{
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: rgb(241, 241, 241);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
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