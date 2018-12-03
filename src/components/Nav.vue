<template>
 
  <div class="row" style="margin: 60px;"> 
	  <nav> 
			<div class="col-lg-6 col-md-5 col-sm-5"><h1>FontFinder</h1></div>
			<div class="col-lg-6 col-md-5 col-sm-5">
				<router-link to="/">Browse</router-link>
				<router-link to="/saved">Saved</router-link>
			</div>
	  </nav> 
	</div>
    
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:900');

h1 {
	text-align: left;
	font-family: 'Raleway';
	font-weight: 700;
	font-size: 40px;
	color: #464646;
}

a {
	font-size: 20px;
	padding: 20px 15px;
	color: #bbb;
}

a:hover, a:focus{
color: #333;
text-decoration: none;
}

a:focus {
  font-weight: 600;
}



</style>
