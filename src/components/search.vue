 <template>
 <div id="rechercheCarte">
      <div class="search-box">
        <input
        type="text"
        class="search-bar"
        placeholder="Cherchez un set"
        v-model="query"
        @keypress="searchCard"
        />
              </div>
      </div>

  </template>

<script>
import { fetchCard } from '@/api';


  export default{ 
  name: 'search' ,
  data() {
    return {
      cardtab: [],
      query:''
    }
  },
     methods: {
       async searchCard(e) {
         if (e.key == "Enter") {
           this.setResults(await fetchCard(this.query))
           this.$emit('cardsUpdate',this.cardtab)
         }
},
      setResults(results)
      {
        this.cardtab = results.data;
        //console.log(results.data[0].image_uris["png"])
      }
     }
  }

</script>