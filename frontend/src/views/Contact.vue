<template>
  <div class="contactPage">
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
        </div>
      </div>
    </nav>
    <main class="container">
      <div class="mainpage row">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="@/assets/Nueng.jpg"
              width="50%"
              height="350"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                <h4><strong>รัชพล หินซุย 6410450257</strong></h4>
              </h5>
              <p class="card-text">สวัสดีครับ Hello World</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="../assets/Kevin.jpg"
              height="350"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                <h4><strong>ศรุต คำยืน 6410450273</strong></h4>
              </h5>
              <p class="card-text">สวัสดีครับ Hello World</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="@/assets/Eng.jpg"
              height="350"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                <h4><strong>ลีโอณิช เช็ง 6310450051</strong></h4>
              </h5>
              <p class="card-text">สวัสดีคะ Hello World</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
