<template>
  <div class="flex">
    <img src="../assets/logo.png" class="logo" alt="logo" />
    <h1>FIT.IT</h1>
    <h2>Keep your workouts organized</h2>
    <router-link to="/About" class="about-link">Find out more</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login"
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: url("../assets/landingpage.jpg") no-repeat fixed center;
  h1,
  h2,
  h3,
  h4 {
    color: #ffffff;
    letter-spacing: 0.15rem;
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-weight: 400;
    letter-spacing: 0.15rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    padding-top: 0;
  }

  .about-link {
    font-weight: 400;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.flex * {
  padding: 0.7%;
}

.test {
  background-color: #02020241;
  color: #ffffff;
  border: 2px solid white;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
