<template>
  <div id="app" class="app">
    <HelloWorld
      author="Héctor Villar"
      role="Software Engineer"
    />
    <TheMenu />
    <main class="content">
      <div class="content__main">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheMenu from './components/TheMenu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheMenu
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  text-align: center;
  background-color: black;
  color: #2c3e50;
  border-radius: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: '';
    z-index: 1;
    display: block;
    width: 100%;
    height: 2rem;
    background-color: black;
  }
}

.content {
  position: relative;
  z-index: 1;
  flex-grow: 1;
  padding: 0 0.7rem 1rem 0.7rem;
  background-color: black;
  overflow: hidden;

  &__main {
    height: 100%;
    padding: 2rem 0.7rem 0.7rem 0.7rem;
    background-color: white;
    border-radius: 0 0 1rem 1rem;
  }
}
</style>
