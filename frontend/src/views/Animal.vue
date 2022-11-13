<template>
  <div class="contactPage">
    <Navbar />
    <main class="container mx-auto mt-4">
      <div class="row">
        <div v-if="animals != null" class="col">
          <div v-for="animal in animals" class="row">
            <card-animal
              :title="animal.name"
              :type="animal.type"
              :detail="animal.description"
              :image="animal.image"
            />
          </div>
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

.redbg {
  background-color: red;
}
</style>
