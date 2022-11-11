<template>
  <div class="mainPage">
    <Navbar />
    <main>
      <div class="position-absolute top-50 text-box ms-5">
        <p>DevCamp KU</p>
        <h1>Team 418</h1>
        <h3>Welcome to my site</h3>
        <div class="row d-inline-flex p-2">
          <router-link class="link rounded" to="/Contact"
            >Contact Us</router-link
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.mainPage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(../assets/background_one.png);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.text-box {
  position: absolute;
  bottom: 45%;
}
.text-box p {
  font-size: 50px;
  font-weight: 600;
}
.text-box h1 {
  font-size: 140px;
  line-height: 160px;
  margin-left: -10px;
  color: transparent;
  -webkit-text-stroke: 1px violet;
  background: url(../assets/back.png);
  -webkit-background-clip: text;
  background-position: 0 0;
  animation: back 20s linear infinite;
}

.text-box .link {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #fff;
}
.text-box .link:hover {
  color: #000000;
  background-color: #fff !important;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #fff;
}
@keyframes back {
  100% {
    background-position: 2000px 0;
  }
}
.text-box h3 {
  font-size: 40px;
  font-weight: 500;
}
.name {
  color: #000000;
}
.bi-youtube {
  color: #000000;
}
</style>
