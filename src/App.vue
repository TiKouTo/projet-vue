
<script setup>
import Card from './components/cards.vue'
import Search from './components/search.vue'
// import Trie from './components/trie.vue'


</script>

<template>
  <div class="cardsgallery">
    <Search @cardsUpdate="cardsDataUpdate"/>
    <!-- <Trie :cards="cardsData"/> -->
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
  }

</script>
