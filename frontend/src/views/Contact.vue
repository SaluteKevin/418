<template>
  <div class="contactPage mainPage">
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
        <div class="row g-4">
          <div class="col">
            <div class="card ho" style="width: 24rem">
              <img src="@/assets/cardOne.png" class="rounded-top"/>
              <div class="card-img-overlay ">
                <div class="card-body ">
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
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #050e1f">ชอบเขียนโค้ด</li>
              </ul>
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #0b1f45">ง่วงแต่ไม่นอน</li>
              </ul>
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #11306b">ขี้เกียจกลับบ้าน เดินทางนาน</li>
              </ul>
            </div>
          </div>

          <div class="col">
            <div class="card ho" style="width: 24rem">
              <img src="@/assets/cardTwo.png" class="rounded-top"/>
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
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #061515">เล่นเกม, เล่นดนตรี</li>
              </ul>
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #103b3b">อยาก ต่อ model RG ให้เสร็จ</li>
              </ul>
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #1a6161">ชอบกิน</li>
              </ul>
            </div>
          </div>

          <div class="col">
            <div class="card ho" style="width: 24rem">
              <img src="@/assets/cardThree.png" class="rounded-top"/>
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
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #05335c">ใส่แว่น</li>
              </ul>
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #074882">เสียงดัง</li>
              </ul>
              <ul class="list-group list-group-flush ho">
                <li class="list-group-item white-text" style="background-color: #095da8">ตื่นสาย</li>
              </ul>
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
.mainPage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(../assets/background_one.png);
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}



.card-body{
  color: #fff !important;
}
.white-text{
  color: #fff;
}

.ho:hover{
  text-shadow: none !important;
  box-sizing: border-box !important;
  transition: all 0.5s ease !important;
  -webkit-transform: scale(1.05) !important;
  -ms-transform: scale(1.05) !important;
  transform: scale(1.05) !important;
  z-index: 2;
}
</style>
