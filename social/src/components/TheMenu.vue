<template>
    <ol class="menu">
        <li>About me</li>
        <li>Social</li>
        <li>Portfolio</li>
    </ol>
</template>
<script>
export default {
    name: 'TheMenu'
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
    flex-grow: 1;
    padding: 1rem;
    font-size: 0.7rem;
  }
}
</style>