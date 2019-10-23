<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <form>
          <input type="text" placeholder="Enter Exercise" />
          <button type="submit" class="add-btn">Add Exercise</button>
        </form>
        <div class="container-list">
          <h2>Your Exercises</h2>
          <ul>
            <li>Item</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "todoList",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
main {
  max-width: 600px;
  margin: 0 auto;

  ul {
    margin-top: 5vh;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #000000;
  }

  input[type="text"] {
    margin-top: 1vh;
    height: 50px;
    width: 350px;
    font-size: 1.5rem;
    border: none;
    background-color: #8c8c8c;
    color: #ffffff;
    padding-right: 50px;

    &::placeholder {
      color: #d9d9d9;
    }
  }

  input[type="text"]:focus {
    outline: none;
    background-color: #464646;
  }

  .container {
    margin-top: 5vh;
    height: 70vh;
  }

  .container-list {
    margin-top: 5vh;
  }

  .add-btn {
    font-size: 1.5rem;
    height: 50px;
    background-color: #37a859;
    color: #ffffff;
    margin-left: -55px;
    border: none;
    border-left: 1px solid white;
    cursor: pointer;
  }
}
</style>