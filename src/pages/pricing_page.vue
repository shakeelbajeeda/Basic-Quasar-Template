<template>
  <q-page class="bg-blue-grey">
    <div class="row q-pt-md">
      <div class="col-md-4">
        <p class="text-h5 text-white q-pl-md">Pricing Page</p>
      </div>
      <div class="col-md-8">
        <div class="float-right text-white">
          <q-btn flat icon="dashboard" label="Dashboard" href="http://localhost:8080/dashboard" />
          <q-btn flat icon="list" label="Pricing" />
          <q-btn
            flat
            icon="lock"
            label="Lock"
            class="q-mr-md"
            href="http://localhost:8080/#/lock_screen2"
          />
        </div>
      </div>
    </div>
    <div class="text-center">
      <p class="text-white text-h4">Pick the best plan for you</p>
      <p
        class="text-white text-subtitle1"
      >You have Free Unlimited Updates and Premium Support on each package.</p>
    </div>
    <div class="q-mx-sm">
      <div class="row q-col-gutter-sm">
        <Pricingcard v-for="card in Pricing_cards" :key="card" :pricing_card_data="card" />
      </div>
    </div>
    <div class="text-white text-center q-pt-lg q-pb-xs q-mx-xs">
      <p>
        Copyright © 2022, made with by
        <q-icon name="favorite" size="1rem" />Shakeel Ahmad
      </p>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import Pricingcard from "src/components/Pricingcard.vue";
export default defineComponent({
  components: {
    Pricingcard
  },
  data() {
    return {
      Pricing_cards: [
        {
          card_bg: "linear-gradient(to right, rgb(237, 110, 160) 0%, rgb(236, 140, 105) 100%);",
          title: "Basic",
          icon: "home_work",
          amount: "0$",
          card_content: "This is good if your company size is between 2 and 10 Persons."
        },
        {
          card_bg: "linear-gradient(to right, rgb(115, 110, 260) 0%, rgb(236, 140, 105) 100%);",
          title: "Small Company",
          icon: "home",
          amount: "25$",
          card_content: "This is good if your company size is between 2 and 10 Persons."
        },
        {
          card_bg: "linear-gradient(to right, rgb(1, 110, 160) 0%, rgb(136, 120, 105) 100%);",
          title: "Extended",
          icon: "apartment",
          amount: "250$",
          card_content: "This is good if your company size is between 2 and 10 Persons."
        },
        {
          card_bg: "linear-gradient(to right, rgb(155, 11, 120) 0%, rgb(186, 170, 257) 100%);",
          title: "Extra Pack",
          icon: "business_center",
          amount: "270$",
          card_content: "This is good if your company size is between 2 and 10 Persons."
        },
      ]

    };
  },
});
</script>
