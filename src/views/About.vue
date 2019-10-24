<template>
  <div class="flex">
    <img src="../assets/logo.png" class="logo" alt="logo" />
    <h1>FIT.IT</h1>
    <p>FIT.IT is an App created for fitness enthusiasts, by fitness enthusiasts. No matter what your exercise routine or sport consists of, FIT.IT is here to help and plan your routine on the go. With intuitive interface, the ability to remove tasks and add new ones whenever, be it on your phone or computer, has never been easier.</p>
    <router-link to="/todoList" tag="button" class="big-btn">Get Started</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About"
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

  p {
    color: #ffffff;
    letter-spacing: 0.1rem;
    min-width: 35%;
    max-width: 40%;
    text-align: center;
    line-height: 1.25;
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
