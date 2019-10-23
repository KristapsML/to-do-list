<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
</script>








<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
}

/* Css Reset */
html {
  box-sizing: border-box;
  font-size: 16px;
}

body,
html {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.logo {
  width: 180px;
  height: 180px;
}
</style>
