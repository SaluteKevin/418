<template>
  <div class="card" style="width: 18rem;">
    <img
        src="@/assets/Nueng.jpg"
        width="50%"
        height="350"
        class="card-img-top"
        alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animal: null
    }
  },
  props: {
    animal: Object,
    url: {
      type: String,
      default: '',
    },
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  color: #000000 !important;
}
.name {
  color: #fff;
}
</style>
