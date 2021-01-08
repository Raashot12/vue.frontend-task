
const app = new Vue({
  el: "#aquila",
  data: {
	  results: []
  }, 

  mounted( ){
	  axios.get("https://hirng-x2021.glitch.me/api").then(response => { this.results = response.data
	})
	
	}
}); 
