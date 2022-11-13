<template>
  <div class="card mb-3" style="width: 32rem">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="image" width="50%" height="200" class="card-img-top" alt="..." />
      </div>
      <div class="card-body col-md-8">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ type }}</h6>
        <p class="card-text">{{ detail }}</p>
      </div>
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
.card-bod {
  color: #000000 !important;
}
.name {
  color: #fff;
}
</style>
