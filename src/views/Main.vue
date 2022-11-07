<template>
  <div class="mainPage">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <i class="bi bi-terminal-fill"></i>
        </router-link>
        <router-link class="nav-link" to="/">Home</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/Contact">Contact</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <div class="name">
              <span
                ><h4><strong>รัชพล หินซุย 6410450257</strong></h4></span
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="text-box ms-5">
        <p>DevCamp KU</p>
        <h1>Team 418</h1>
        <h3>Welcome to my site</h3>
        <div class="row d-inline-flex p-2">
          <router-link class="link" to="/Contact">Contact Us</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.mainPage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(../assets/background.png);
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
  -webkit-text-stroke: 1px #fff;
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
</style>
