<template>
  <div class="contactPage">
    <Navbar />
    <main class="container">
      <div class="mainpage row">
        <div class="col-md-4">
          <!--          <div v-if="animals != null">-->

          <!--            <card-animal v-for="animal in animals"-->
          <!--                          :animal="animal"-->
          <!--                          :key="animal.id"-->
          <!--                         :url="`Animal/${animal.id}`">-->
          <!--            </card-animal>-->
          <!--            </div>-->
          <card-animal> </card-animal>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardAnimal from "@/components/CardAnimal.vue";
import { useAnimal } from "@/store/animal.js";

export default {
  data() {
    return {
      animals: [],
    };
  },
  components: {
    CardAnimal,
    Navbar,
  },
  name: "Animal",
  comments: {
    Navbar,
  },
  async mounted() {
    await useAnimal().fetchData();
    this.animals = useAnimal().getAnimals;
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
