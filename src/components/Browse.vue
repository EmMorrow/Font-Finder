<template>
  <div>
    <h1>Browse</h1>
    <font-awesome-icon icon="heart" />
    <font-awesome-icon icon="bookmark" />
    <font-awesome-icon size="2x" :icon="['far', 'heart']" />
    <div class="wrap">
      <div v-for="item in items">
        <div class="container">
          <div class="wrapper">
            <img src="https://www.google.com/images/srpr/logo11w.png" />
            <span class="close"></span>
          </div>
          <h1>Font Name</h1>
          <p class="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
        </div>
      </div>
    </div>
        

  </div>
</template>

<script>

export default {
  name: 'Browse',
  data: function() {
    return {
      items: [
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 1},
        {num: 2},
        {num: 3},
      ]
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

/* center container in the middle */
html {
  display: grid;
  min-height: 100%;

}


.container {
  padding: 30px 30px;
  /*position: relative;*/
  margin: 10px 10px;
  /*overflow: hidden;*/
  /*width: 100px;*/
  float: left;
  width: 40%;
  margin-bottom: 20px;
  /*height: 350px;*/
  background: white;
  box-shadow: 1px 1px 1px rgba($rose, .1);
  border-radius: 10px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}


.wrapper {
  position: relative;
  display: inline-block;
}
.close:before {
  content: 'X';
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
h1 {
  font-size: 1.2em;
  color: $dark;
  margin-top: -5px;
}

h2 {
  color: $tan;
  margin-top: -5px;
}
.wrap{
  margin-left: 10%;
  margin-right: 10%;
}


.desc {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: $dark;
  font-size: .7em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}


</style>
