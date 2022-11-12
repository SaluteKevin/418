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
      <h6 class="card-subtitle mb-2" style="color: rgba(248, 250, 252)"> Card subtitle</h6>
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
:root{
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}
body {
  background: #111 !important;
}

.card {
  transition:0.5s;
  cursor:pointer;
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}
.card-body {
  color: rgba(250, 250, 250) !important;
}
.card-body .card-subtitle{
  color: rgb(209 213 219) !important;
}
.card-title i{
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg);
  color:#18d4ca;

}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  background: var(--gradient) !important;
  -webkit-background-clip: none !important;
  -webkit-text-fill-color: #fff !important;
  border: 5px solid #fff !important;
  box-shadow: #222 1px 0 10px;
  text-decoration: underline;
}
</style>
