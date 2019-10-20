<template>
  <div>
    <header>
      <h1>fit.it</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
header {
  height: 10vh;
  background-color: #5a5a5a;
  display: flex;

  h1 {
    margin-top: 25px;
    margin-left: 15px;
    text-transform: uppercase;
    color: #ffffff;
  }
}
</style>