<template>
  <div class="container-fluid">
    <!-- Navbar -->
    <Navbar />
    <!-- Mainpage-1 -->
    <section class="mainPage">
      <div class="container text-box ms-5">
        <div class="row">
          <div class="col">
            <div class="row">
              <p style="color: #fff">DevCamp KU</p>
              <h1>Team 418</h1>
              <h3 style="color: #fff">Welcome to my site</h3>
              <div class="d-inline-flex p-2">
                <router-link class="link rounded" to="/Contact"
                  >Contact Us</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mainpage-2 -->
    <section class="setup">
      <div class="container">
        <div class="text-header text-center">
          <h3>Concept Team</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            molestias quasi quos magni sint repellat odio voluptatem omnis rem
            facere impedit quo, quae ipsa nulla ipsam hic quibusdam ducimus
            laboriosam?
          </p>
        </div>
        <div class="items text-center">
          <div class="row">
            <!-- concept-1 -->
            <div class="col-md-4">
              <div class="icons">
                <img src="" alt="" />
              </div>
              <div class="desc">
                <h5>lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium magnam quibusdam ut quaerat nostrum excepturi
                  inventore porro quam placeat sed!
                </p>
              </div>
            </div>

            <!-- concept-2 -->
            <div class="col-md-4">
              <div class="icons">
                <img src="" alt="" />
              </div>
              <div class="desc">
                <h5>lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium magnam quibusdam ut quaerat nostrum excepturi
                  inventore porro quam placeat sed!
                </p>
              </div>
            </div>
            <!-- concept-3 -->
            <div class="col-md-4">
              <div class="icons">
                <img src="" alt="" />
              </div>
              <div class="desc">
                <h5>lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium magnam quibusdam ut quaerat nostrum excepturi
                  inventore porro quam placeat sed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mainpage3 -->
    <section class="dog mainPage">
      <div class="container p-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6">
            <div class="row">
              <h4 class="text-center">content</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                qui quis harum dolorem porro provident officiis debitis dolorum
                placeat voluptates maxime non aperiam adipisci beatae quasi
                incidunt nostrum voluptatum exercitationem! Quos exercitationem
                pariatur necessitatibus blanditiis adipisci saepe, ipsa magni id
                sapiente ea dolore tempora optio atque labore cumque rerum illo.
                Deleniti ipsa reprehenderit tenetur! Mollitia magni ex vero
                totam. Error. Voluptatum dolores, dolor et ex ut animi minima
                libero esse. Deleniti tenetur placeat sed repellat, facilis amet
                totam asperiores eligendi fugit consectetur reiciendis eveniet
                modi
              </p>
            </div>
          </div>

          <div class="col-lg-6 cardBG">
            <div class="row" style="height: 100%">
              <Dog3D />
              <div class="text-center">
                <h2>Move Me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos corrupti placeat animi velit, adipisci culpa
                  blanditiis assumenda saepe quas ex minus reprehenderit
                  nostrum, commodi possimus libero tempore sunt ut inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer class="footer-endPage container-fuild"> </Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

import Dog3D from "../components/Dog3D.vue";

export default {
  name: "Main",
  components: {
    Navbar,
    Dog3D,
  },
};
</script>

<style lang="scss" scoped>
.mainPage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    url(../assets/background_one.png);
  width: 100%;
  height: 800px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
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

section.setup {
  padding: 200px 0;
}

section.setup .text-header h3 {
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  color: #fff !important;
}
section.setup .text-header p {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #fff !important;
  padding: 27px 0;
}

section.setup .icons {
  padding: 27px 0;
}

section.setup h5 {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  padding-bottom: 18px;
}

section.setup .desc p {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #fff;
  max-width: 284px;
  margin: 0 auto;
}
.redbg {
  background-color: red;
}

section.dog h4 {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
}

section.dog p {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #fff;
}

section.dog .cardBG {
  background-color: #f0e7db;

  border-radius: 25px;
  padding: 10px;
}

.cardBG .text-center p {
  color: #000000;
}

.footer-endPage {
  background-color: #000000;
  height: 80px;
}
</style>
