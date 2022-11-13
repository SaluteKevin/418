<template>
  <div class="animalPage">
    <Navbar />
    <main class="container mx-auto mt-4">
        <div v-if="animals != null" class="row">
            <div v-for="animal in animals" class="col ho">
              <card-animal
                :title="animal.name"
                :type="animal.type"
                :detail="animal.description"
                :image="animal.image"
              />
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
.animalPage{
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(../assets/background_two.jpg);
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.card-body {
  color: #000000 !important;
}

.name {
  color: #fff;
}

.redbg {
  background-color: red;
}
.ho:hover {
  text-shadow: none !important;
  box-sizing: border-box !important;
  transition: all 0.5s ease !important;
  -webkit-transform: scale(1.05) !important;
  -ms-transform: scale(1.05) !important;
  transform: scale(1.05) !important;
  z-index: 2;
}
</style>
