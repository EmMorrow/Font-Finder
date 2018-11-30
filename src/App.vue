
<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>

import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    'Nav': Nav
  }
}
</script>

<style>
html {
}
Nav {
  width: 100%;
  text-align: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

</style>

