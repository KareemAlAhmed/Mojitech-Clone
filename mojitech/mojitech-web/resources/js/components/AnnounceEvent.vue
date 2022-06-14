<template>
  <div class="announce">
    <p style="border-right: 1px solid white">
      We accept <span class="usd">USDT</span>
    </p>
    <p>We compete any price</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.announce {
  display: flex;
  background-color: #26a7ca;
  padding: 7px 425px;
  font-size: 14px;
}

p {
  color: white;
  padding: 0 5px;
}
.usd {
  text-decoration: underline;
}
</style>