<template>
  <div class="contactPage">
    <Navbar/>
    <main class="container">
      <div class="mainpage row">
        <div class="col-md-4">
          <div v-if="animals != null">
            <card-animal v-for="animal in animals" :key="animal.id" class=""></card-animal>
            <img src={{animal.image}}>
            <div>Name: {{animal.name}}</div>
            <div>Type: {{animal.type}}</div>
            <div>Description {{animal.description}}</div>
          </div>
          <card-animal>

          </card-animal>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardAnimal from "@/components/CardAnimal.vue";
import { useAnimal } from '../store/animals';

export default {
  data(){
    return{
      animals: [],
    };
  },

  async mounted(){
    await useAnimal().fetchData;
    this.animals = useAnimal().getAnimals
  },

  components: {
    CardAnimal,
    Navbar
  },
  name: "Animal",
  comments: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  color: #000000 !important;
}

.name {
  color: #fff;
}
</style>
