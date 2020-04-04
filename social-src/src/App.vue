<template>
  <div id="app" class="app">
    <TheHeader />
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
import { debounce } from 'lodash'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    TheMenu
  },
  mounted() {
    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener(
      "resize",
      debounce(() => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }, 100)
    );
  }
}
</script>
