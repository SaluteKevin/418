<template>
  <div class="contactPage">
    <Navbar />
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
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  name: "Contact",
  comments: {
    Navbar,
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
