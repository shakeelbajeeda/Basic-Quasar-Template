<template>
  <q-page>
    <div class="col-12 q-pt-lg animation-top">
      <div class="row q-mx-sm">
        <div class="col-xs-3">
          <q-icon
            name="chevron_left"
            @click="this.$router.push('/Login')"
            size="2.2rem"
          />
        </div>
        <div class="col-xs-9">
          <div class="text-h5 text-bold">Forgot Password</div>
        </div>
      </div>
      <q-chip
        class="q-ma-none"
        color="dark"
        size="0.06rem"
        style="width: 100%"
        text-color="white"
      />
    </div>

    <div class="col-12 q-mx-md q-mt-md">
      <div class="text-body1 text-bold text-center animation-left">
        Enter your email and will send you instruction on how to reset it
      </div>
      <q-input
        filled
        label="Email"
        v-model="email"
        class="text-bold q-mt-lg animation-right"
      />
      <q-btn
        label="Send"
        color="light-blue"
        class="text-body1 text-bold q-mt-md btn-length animation-left"
      />
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Forgot",
  data() {
    return {
      email: ref(""),
    };
  },
});
</script>
