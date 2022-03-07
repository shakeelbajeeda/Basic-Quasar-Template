<template>
  <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
    <q-card :style="'background-image:' + pricing_card_data.card_bg">
      <q-card-section class="text-center text-h5 text-white">{{ pricing_card_data.title }}</q-card-section>
      <q-card-section class="text-center text-white">
        <q-icon :name="pricing_card_data.icon" size="3.5rem"></q-icon>
        <p class="text-h2 text-bold q-pt-sm">{{ pricing_card_data.amount }}</p>
        <p class="text-h6 text-bold">{{ pricing_card_data.card_content }}</p>
        <q-btn flat label="Buy Now" style="border: 1px solid white" />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["pricing_card_data"]
}
</script>
