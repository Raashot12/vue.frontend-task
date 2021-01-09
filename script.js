
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

const ppl = [ {
	name : 'Jim',
	status: ['Married'],
},
 {
	 name: 'Anna',
	 status: ['Married', 'Parent'],
 },
 {
	 name: 'Ed',
	 status: ['Married']
 }
];

const print = ppl.find(person => person.status.includes('parent'))
console.log(print());

/**
 * ?The includes() method determines whether a string contains the characters of a specified string. 
 * ?This method returns true if the string contains the characters, and false if not. Note: The includes() method is case sensitive.
 */