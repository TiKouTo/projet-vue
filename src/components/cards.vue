<template>
  <div class="card">
    <img class="picture" v-bind:src="pictureUrl" />
    <div>
      <h2 class="cardname">{{cardname}}</h2>
      <p class="color">{{color}}</p>
      
    </div>  
    
  </div>
</template>

<script>
	export default {
    name: 'Card',
     props: {
    cardname: {type: String, required: true},
    color: String, 
    pictureUrl: {type: String, default:"https://cards.scryfall.io/large/front/a/a/aa409269-3698-42a2-8c51-75557b27a6f6.jpg?1664653410"}
  }
	}
</script>

<style>
	.card-gallery {
	  display: flex;
	}

	h2 {
		 font-size: 20px;
	}
</style>