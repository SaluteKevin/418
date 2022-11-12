<template>
  <div class="contactPage">
    <Navbar/>
    <main class="container">
      <div class="row">
        <div class="col-md-4">
<!--          <div v-if="animals != null">-->

<!--            <card-animal v-for="animal in animals"-->
<!--                          :animal="animal"-->
<!--                          :key="animal.id"-->
<!--                         :url="`Animal/${animal.id}`">-->
<!--            </card-animal>-->
<!--            </div>-->
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

export default {
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
.mainPage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}


.name {
  color: #fff;
}
</style>
