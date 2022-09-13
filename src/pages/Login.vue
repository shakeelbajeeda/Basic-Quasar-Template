<template>
  <q-page class="page">
    <div>
      <q-img src="~assets/images/img-2.png" width="100%" height="100%" />
    </div>
    <div class="q-mx-md">
      <div class="text-h6">Sign In</div>
      <q-form class="q-mt-md">
        <q-input
          filled
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type Email']"
        />

        <q-input
          filled
          :type="isPwd ? 'password' : 'text'"
          v-model="password"
          label="Password "
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 8 && val < 12) || 'Please type your password',
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-form>
      <div
        class="text-bold text-center q-mt-sm"
        @click="this.$router.push('/mainPage')"
      >
        Remember me
      </div>
      <q-btn
        label="sign in"
        class="text-capitalize btn-length q-mt-md"
        color="light-blue"
        to="/Packages"
      />
      <div
        class="text-bold text-center q-mt-lg forgot"
        @click="this.$router.push('/Forgot')"
      >
        Forgot Password?
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref(null);
    const password = ref(null);
    return {
      email,
      password,
      isPwd: ref(true),
    };
  },
});
</script>
<style scoped>
.btn-length {
  width: 100%;
}
.forgot {
  opacity: 0.6;
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
.page {
  animation-name: slide2;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
</style>

