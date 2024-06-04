Pour afficher le contenu d’une variable dans votre HTML, il vous suffit de l’injecter à l’aide de doubles accolades à l’emplacement souhaité : <h2 class="firstname"></h2>

<template>
  <div class="dog-card">
    <img class="picture" v-bind:src="pictureUrl"/>
    <div>
      <h2 class="firstname">{{firstname}}</h2>
      <p class="breed">{{breed}}</p>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'DogCard',
    props: {
    firstname: {type: String, required: true},
    breed: String, 
    pictureUrl: {type: String, default:"https://my-best-kennel.com/pictures/default.png"}
  }
}
</script>

<template>
  <div class="dogs-gallery">
    <DogCard firstname="Pluto" breed="Saint-Hubert" pictureUrl="https://my-best-kennel.com/pictures/45.png"/>
    <DogCard firstname="Rex" breed="Labrador" pictureUrl="https://my-best-kennel.com/pictures/46.png"/>
  </div>
</template>

<template>
  <div class="dogs-gallery">
    <!-- <h2 class="firstname">{{firstname}}</h2> -->
    <p >zuuzepji</p>
    <DogCard cardname="Yoshimaru, Ever Faithful" color="white" pictureUrl="https://cards.scryfall.io/large/front/a/a/aa409269-3698-42a2-8c51-75557b27a6f6.jpg?1664653410"/>
    <DogCard cardname="Banehound" color="black" pictureUrl="https://cards.scryfall.io/large/front/b/9/b9e03567-c95a-40b8-a75a-971076093f57.jpg?1557576381"/>
  </div>
</template>

<script>
export default {
  name: 'DogCard',
    props: {
    cardname: {type: String, required: true},
    color: String, 
    pictureUrl: {type: String, default:"https://cards.scryfall.io/large/front/a/a/aa409269-3698-42a2-8c51-75557b27a6f6.jpg?1664653410"}
  }
}
</script>

<style>
	/* .dog-card {
	  display: flex;
	} */

	p {
		 font-size: 20px;
	}
</style>

<DogCard cardname="Yoshimaru, Ever Faithful" color="white" pictureUrl="https://cards.scryfall.io/large/front/a/a/aa409269-3698-42a2-8c51-75557b27a6f6.jpg?1664653410"/>
      <DogCard cardname="Banehound" color="black" pictureUrl="https://cards.scryfall.io/large/front/b/9/b9e03567-c95a-40b8-a75a-971076093f57.jpg?1557576381"/>

      <DogCard 
        v-for="dog in dogsData"
        :key="dog.id" 
        :firstname="dog.name" 
        :breed="dog.breed" 
        :pictureUrl="dog.picture"/>

         <!-- <Card cardname="Yoshimaru, Ever Faithful" color="white" pictureUrl="https://cards.scryfall.io/large/front/a/a/aa409269-3698-42a2-8c51-75557b27a6f6.jpg?1664653410"></Card>
    <Card cardname="Banehound" color="black" pictureUrl="https://cards.scryfall.io/large/front/b/9/b9e03567-c95a-40b8-a75a-971076093f57.jpg?1557576381"></Card>
    <Card :cardname="cardsData[0].cardname" :color="cardsData[0].color" :pictureUrl="cardsData[0].picture"/>
    <Card :cardname="cardsData[1].cardname" :color="cardsData[1].color" :pictureUrl="cardsData[1].picture"/> -->

    