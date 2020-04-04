<template>
  <div class="hello" :class="{ '--mini': isMini }">
    <h1 class="author">{{ author }}</h1>
    <p class="role">{{ role }}</p>
    <img class="image" src="/avatar2.jpg">
    <span @click="toggleIsMini" class="close" :class="isMini ? 'icon-port-maximize' : 'icon-port-minimize'"></span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    author: String,
    role: String,
  },
  computed: {
    ...mapState(['isMini']),
  },
  methods: {
    ...mapMutations(['toggleIsMini'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 19rem;
  flex-basis: 19rem;
  overflow: hidden;
  margin: 0 0.7rem;
  padding: 0.5rem;
  border-radius: 1rem 1rem 0 0;
  filter: grayscale(100%);
  transition: all 100ms ease-in;

  &:hover {
    filter: grayscale(0);
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 5.5rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.7));
    display: block;
  }

  &.--mini{
    min-height: 1rem;
    height: 2rem;
    flex-basis: 5rem;

    .image {
      width: 100%;
      height: auto;
    }
  }
}

.author,
.role {
  position: relative;
  z-index: 1;
  margin: 0;
  text-align: left;
  color: white;
  text-shadow: 0 0 5px black;
}

.role {
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
}

[class*='icon-port-'] {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 1rem;
  color: white;
  font-size: 1rem;
}
</style>
