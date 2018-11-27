<template>
 
  <h1>Browse</h1>
  <!-- <div v-for="item in feed" class="item">
    <h3>Title Text</h3>
    <p>words words words words words words words words words words words words words words words words words words words words wordswords words wordswords words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words wordswords words wordswords words words words words words words words words words words words</p>
  </div> -->
</template>

<script>
export default {
  name: 'Browse',
  data() {
    return {
      feed: [1,2,3,4,5,6,7,8]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
