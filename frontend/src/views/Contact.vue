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
          <div class="card" style="width: 24rem">
            <img src="@/assets/cardOne.png" class="rounded"/>
            <div class="card-img-overlay">
              <div class="card-body">
                <div>
                  <img
                    src="@/assets/nueng.png"
                    class="img-thumbnail"
                    height="30%"
                    width="30%"
                    alt="..."
                  />
                </div>
                <div>
                  <h5 class="card-title">
                    <h4><strong>รัชพล หินซุย 6410450257</strong></h4>
                  </h5>
                  <p class="card-text">สวัสดีครับ Hello World</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style="width: 24rem">
            <img src="@/assets/cardTwo.png" class="rounded"/>
            <div class="card-img-overlay">
              <div class="card-body ">
                <div>
                  <img
                    src="@/assets/kevin.png"
                    class="img-thumbnail"
                    height="30%"
                    width="30%"
                    alt="..."
                  />
                </div>
                <div>
                  <h5 class="card-title">
                    <h4><strong>ศรุต คำยืน 6410450273</strong></h4>
                  </h5>
                  <p class="card-text">สวัสดีครับ Hello World</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style="width: 24rem">
            <img src="@/assets/cardThree.png" class="rounded"/>
            <div class="card-img-overlay">
              <div class="card-body ">
                <div>
                  <img
                    src="@/assets/eng.png"
                    class="img-thumbnail"
                    height="30%"
                    width="30%"
                    alt="..."
                  />
                </div>
                <div>
                  <h5 class="card-title">
                    <h4><strong>ลีโอณิช เซ็ง 6310450051</strong></h4>
                  </h5>
                  <p class="card-text">สวัสดีค่ะ Hello World</p>
                </div>
              </div>
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
  color: #fff !important;
}
.name {
  color: #fff;
}
</style>
