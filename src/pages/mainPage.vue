<template>
  <q-page>
    <div>
      <div class="bg-img" style="display: flex">
        <div style="margin: auto">
          <div class="animation-h text-white text-h4 text-bold text-center q-mx-md">
            Discover Car Wash near you
          </div>
          <div class="animation-content text-white text-h6 text-center q-mx-sm q-pt-md">
            Find the best car wash you want by your location or neighborhood
          </div>
          <div class="q-mx-lg padding-top">
            <q-btn
              label="sign up"
              color="light-blue"
              class="btn-animation text-capitalize q-px-lg q-ml-sm"
              size="1.1rem"
              to="/signUp"
            />
            <q-btn
              label="sign in"
              color="light-blue"
              class="btn-animation2 text-capitalize q-px-lg float-right q-mr-sm"
              size="1.1rem"
              align="right"
              to="/Login"
            />
          </div>
          <div
            class="
              text-h6 text-white text-center
              q-mx-sm q-pt-md
              bottom-content
              animation-h
            "
          >
            Find the best car wash you want by your location or neighborhood
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-dark">
      <div class="dimmed">
      <q-parallax src="~assets/images/img-1.jpeg" class="bg-img">
        <div class="text-white text-h4 text-bold text-center">
          Discover Car Wash near you
        </div>
        <div class="text-white text-bold text-center q-mx-sm q-pt-md">
          Find the best car wash you want by your location or neighborhood
        </div>
        <div class="btn-padding">
          <q-btn
            label="sign up"
            color="light-blue"
            class="text-capitalize q-px-lg"
            size="1rem"
          />
          <q-btn
            label="sign in"
            color="light-blue"
            class="text-capitalize q-px-lg q-ml-xl"
            size="1rem"
          />
        </div>
        <div class="text-white text-bold text-center q-mx-sm q-pt-md">
          Find the best car wash you want by your location or neighborhood
        </div>
      </q-parallax>
      </div>
    </div> -->
  </q-page>
</template>
<script>
</script>
<style  scoped>
.bg-img {
  height: 100vh !important;
  background-image: url("~assets/images/img-1.png");
  background-size: cover;
}
.padding-top {
  padding-top: 100px;
}
.bottom-content {
  position: absolute;
  bottom: 70px;
}
@keyframes slideInLeft {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
.animation-h {
  animation: 1s ease-out 0s 1 slideInLeft;
}
.animation-content {
  animation: 1s ease-out 0s 1 slideInRight;
}
@-webkit-keyframes slide {
  0% {
    transform: translate(0px, 200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@-moz-keyframes slide {
  0% {
    transform: translate(0px, 200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@-o-keyframes slide {
  0% {
    transform: translate(0px, 200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes slide {
  0% {
    transform: translate(0px, 200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.btn-animation {
  animation-name: slide;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
@-webkit-keyframes slide2 {
  0% {
    transform: translate(10px, -200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@-moz-keyframes slide2 {
  0% {
    transform: translate(10px, -200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@-o-keyframes slide2 {
  0% {
    transform: translate(10px, -200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes slide2 {
  0% {
    transform: translate(10px, -200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.btn-animation2 {
  animation-name: slide2;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
</style>

