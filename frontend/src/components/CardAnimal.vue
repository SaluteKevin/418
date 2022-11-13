<template>
  <div class="card" style="width: 18rem">
    <img :src="image" width="50%" height="350" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ type }}</h6>
      <p class="card-text">{{ detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animal: null,
    };
  },
  props: {
    title: String,
    type: String,
    detail: String,
    image: String,
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
