
<script setup>
import Card from './components/cards.vue'
import Search from './components/search.vue'

// import fetchCard from './api.js'
// import getCardsData from './CardsRepository.js'
// import { getCardsData } from './CardsRepository';
// import { fetchCard } from './api.js';


</script>

<template>
  <div class="cardsgallery">
    <Search @cardsUpdate="cardsDataUpdate"/>
    <Card 
        v-for="card in cardsData"
        :key="card.id" 
        :cardname="card.name" 
        :color="card.breed" 
        :pictureUrl="card.image_uris['png']"></Card>
   
   
    </div>
</template>


<script>
export default { 
    /* name:app, */
  components: { Card },
  data() {
    return {
      cardsData: [] 
    }
  },
  methods: {
    cardsDataUpdate(val) {
      this.cardsData = val
      console.log(val)
    }
  },
  created: function() {

  },
  }

</script>
