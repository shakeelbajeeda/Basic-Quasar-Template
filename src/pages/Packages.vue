<template>
  <q-page class="animation-zoom">
    <div class="q-mx-md">
      <div>
        <PackagesTopCard />
      </div>
      <div class="col-12 q-mt-md">
        <div class="row q-col-gutter-lg">
          <CardPackage v-for="rate in rates" :key="rate" :package_data="rate" />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import PackagesTopCard from "src/components/packagesTopCard.vue";
import CardPackage from "src/components/common/CardPackage.vue";

export default defineComponent({
  name: "Packages",
  components: {
    PackagesTopCard,
    CardPackage,
  },
  data() {
    return {
      rates: [
        {
          img: "images/img-4.jpg",
          heading: "Engine Details",
          caption1: "Degreasing and Rust Removing",
          caption2: "Safest chemicals tasted on Multiple cars",
          caption3: "Complete interior polishing",
        },
        {
          img: "images/img-5.jpeg",
          heading: "Exterior Cleaning",
          caption1: "Body Bugs and Tar Removing",
          caption2: "Compounding & Scratch Removing",
          caption3: "Complete wax and polish",
          caption4: "Tyre and Rim Cleaning polish",
        },
        {
          img: "images/img-6.jpg",
          heading: "Compound & Polish",
          padding: "q-pl-xs",
          caption1: "Complete Polish",
          caption2: "Degreasing and Rust Removing",
          caption3: "Engine thorough polish",
          caption4: "Use Heavy polish",
        },
        {
          img: "images/img-7.jpeg",
          heading: "Polishing",
          caption1: "Complete Interior and Exterior Polishing",
          caption2: "Exterior Polishing brings backs the lost shine",
          caption3: "Increase the life of car parts ",
        },
        {
          img: "images/img-4.jpg",
          heading: "Engine Details",
          caption1: "Degreasing and Rust Removing",
          caption2: "Safest chemicals tasted on Multiple cars",
          caption3: "Complete interior polishing",
        },
        {
          img: "images/img-5.jpeg",
          heading: "Exterior Cleaning",
          caption1: "Body Bugs and Tar Removing",
          caption2: "Compounding & Scratch Removing",
          caption3: "Complete wax and polish",
          caption4: "Tyre and Rim Cleaning polish",
        },
      ],
    };
  },
});
</script>
<style>
.img-style {
  border-radius: 100%;
  border: 5px solid rgb(128, 202, 236);
}
@-webkit-keyframes zoom-in {
  0% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
@-moz-keyframes zoom-in {
  0% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
@-o-keyframes zoom-in {
  0% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes zoom-in {
  0% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}

.animation-zoom {
  animation-name: zoom-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
</style>


