<template>
  <div class="col-xs-6 text-center">
    <q-img
      :src="package_data.img"
      class="img-style"
      width="80%"
      height="15vh"
    />
    <q-card class="bg-grey-4 q-py-xs">
      <q-card-section class="q-pa-none">
        <q-chip
          color="white text-purple"
          class="q-ma-none text-bold"
          :class="package_data.padding"
          >{{ package_data.heading }}</q-chip
        >
      </q-card-section>
      <q-card-section class="q-pa-none q-px-xs text-left">
        <div class="text-bold font-size">{{ package_data.caption1 }}</div>
        <div class="text-bold font-size">
          {{ package_data.caption2 }}
        </div>
        <div class="text-bold font-size">{{ package_data.caption3 }}</div>
        <div class="text-bold font-size">{{ package_data.caption4 }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["package_data"],
  name: "CardPackage",
};
</script>
<style>
.font-size {
  font-size: 9px;
}
</style>
