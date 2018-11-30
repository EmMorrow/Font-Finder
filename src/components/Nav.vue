<template>
 
  <div> 
	  <nav> 
	    <router-link to="/">Browse</router-link>
	    <router-link to="/saved">Saved</router-link>
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

a {
	margin: 20px 15px;
}

div {
	margin: 30px;
}



</style>
