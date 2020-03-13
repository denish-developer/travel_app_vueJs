<template>
 <div class="todo">
 	<div class="header">
  	<h1>{{header}}</h1>
  	<button v-if="state === 'default'" class="btn btn-primary" @click="changeState('edit')">Add Item</button>
  	<button v-else class="btn btn-cancel" @click="changeState('default')">Cancel</button>
  </div>

  <div v-if="state === 'edit'" class="add-item-form">
  	<input type="text" v-model="newItem" placeholder="Add an item" @keyup.enter="saveItem">
  	<p>{{ characterCount }}/100</p>
  	<button class="btn btm-primary" :disabled="newItem.length === 0" @click="saveItem">Save Item </button>
  </div>
  	<ul>
  		<li v-for="item in items" :class="[item.purchase ? 'strikeout' : '']" @click="togglePurchase(item)">{{ item.label }}</li>
  	</ul>
  </div>
  
</template>



<script>
// @ is an alias to /src

export default {
  name: "todo",
  data(){
  	return{
  		header:'ToDo app',
  		state:'default',
  		newItem:'',
  		items:[
			  	{
			  		label:"10 Peaces of Dahaka Topi",
			  		purchase:false,
			  	},
			  	{
			  		label:"5 pieces of board game",
			  		purchase:true,

			  	},
			  	{
			  		label:"20 Peaces of Chocolate",
			  		purchase:false,

			  	}

  			]
  	}
  },
  computed:{
    characterCount(){
    	return this.newItem.length;
    }
  },
  methods:{
  	changeState(state){
  		this.state = state
  	},
  	saveItem(){
  		this.items.push({
            label: this.newItem,
            purchase: false
  		});
  		this.newItem = '';
  	},
  	togglePurchase(item){
  		item.purchase = !item.purchase
  	}
  }
  // ,
//   computed:{
// 			items(){
// 				return [
// 			  	{
// 			  		label:"10 Peaces of Dahaka Topi",
// 			  		purchase:false
// 			  	},
// 			  	{
// 			  		label:"5 pieces of board game",
// 			  		purchase:false
// 			  	},
// 			  	{
// 			  		label:"20 Peaces of Chocolate",
// 			  		purchase:false
// 			  	}

//   			]
// 	}
// }
 

};
</script>
<style scoped>
ol {
  background: #ff9999;
  padding: 20px;
}

ul {
  background: #3399ff;
  padding: 20px;
  width: 20%;
}

ol li {
  background: #ffe5e5;
  padding: 5px;
  margin-left: 35px;
}

ul li {
  background: #cce5ff;
  margin: 5px;
}
.strikeout{
	  text-decoration: line-through;

}

	</style>
