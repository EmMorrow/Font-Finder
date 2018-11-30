
<template>
  <div>
    <h1>Browse</h1>
    <div class="wrap">
      <div v-for="font in fonts">
        <div v-if="currFont.fontFamily = font.family"class="container">
          <div class="wrapper">
            <i class="far fa-heart"></i>
          </div>
          <h1 v-bind:style="currFont">{{currFont.fontFamily}}</h1>
          <p class="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
        </div>
      </div>
    </div>
        

  </div>
</template>
<!-- <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script> -->


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
      ],
      fonts: [
        {family: "'Roboto', sans-serif"},
        {family: "'Noto Sans TC', sans-serif"},
        {family: "'Noto Sans SC', sans-serif"},
        {family: "'Open Sans', sans-serif"},
        {family: "'Lato', sans-serif"},
        {family: "'Black Han Sans', sans-serif"},
        {family: "'Roboto Condensed', sans-serif"},
        // {family: "'Source Sans Pro', sans-serif"},
        // {family: "'Oswald', sans-serif"},
      ],
      currFont: {
        fontFamily: "hii"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Lato|Noto+Sans+SC|Noto+Sans+TC|Open+Sans|Oswald|Roboto|Roboto+Condensed|Source+Sans+Pro');
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
  border-radius: 6px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}


.wrapper {
  position: relative;
  display: inline-block;
  margin-left: 90%;
  cursor: pointer;
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
