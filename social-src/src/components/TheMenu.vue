<template>
  <ol class="menu">
    <li v-for="section in sections" :key="`section-${section.name}`"
    :class="{ 'active': $route.name === section.name }"
    >
      <router-link :to="section.name">{{ section.text }}</router-link>
    </li>
  </ol>
</template>
<script>
export default {
  name: 'TheMenu',
  data() {
    return {
      sections: [
        {
          name: 'about',
          text: 'About me'
        },
        {
          name: 'networks',
          text: 'Social'
        },
        {
          name: 'portfolio',
          text: 'Portfolio'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
.menu {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: black;
  color: white;
  list-style: none;

  li {
    height: 3rem;
    overflow: hidden;
    flex-grow: 1;
    font-size: 0.7rem;
    transition: all 250ms ease-in;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 1.7rem 1rem 0.7rem 1rem;
    color: rgba(255, 255, 255, 0.64);
    text-decoration: none;
  }

  .active {
    font-size: 1rem;

    a {
      padding-top: 0.5rem;
      color: white;
    }

    a:after {
      $size: 3px;
      content: '';
      display: inline-block;
      width: $size;
      height: $size;
      background-color: white;
      border-radius: 50%;
    }
  }
}
</style>