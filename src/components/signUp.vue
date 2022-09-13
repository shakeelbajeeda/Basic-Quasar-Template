<template>
  <q-page>
    <div class="col-12 q-mx-md q-pt-lg">
      <div class="row animation-top">
        <div class="col-xs-8">
          <div class="welcome-user text-bold">Welcome User</div>
        </div>
        <div class="col-xs-4">
          <q-img
            style="border-radius: 100%"
            spinner-color="light-blue"
            src="https://pbs.twimg.com/profile_images/1433468735331962881/Xtjqc9eg_400x400.jpg"
          />
        </div>
      </div>
      <q-form @submit="SignUp" class="q-gutter-sm q-mt-xl animation-bottom">
        <q-input
          filled
          v-model="name"
          label="Name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type Name']"
        />

        <q-input
          filled
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[(val) => !!val || 'Email is missing', isValidEmail]"
        />
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val.length <= 12 && val.length >= 8) ||
              'password should be between 8 and 12 characters',
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
        <q-input
          filled
          v-model="phone"
          type="number"
          label="Mobile Number"
          :max-length="11"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type Mobile No',
          ]"
        />
        <div>
          <q-btn
            label="sign up"
            type="SignUp"
            color="light-blue"
            class="btn-length"
          />
        </div>
      </q-form>
      <div
        class="text-body1 text-bold q-pt-lg text-center animation-bottom"
        @click="this.$router.push('/Login')"
      >
        <span class="opacity">Have an account?</span>
        Sign In
      </div>
    </div>
  </q-page>
</template>
<script>
import { Notify } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "signUp",
  setup() {
    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const password = ref(null);

    return {
      name,
      email,
      phone,
      password,
      isPwd: ref(true),
    };
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    SignUp() {
      Notify.create({
        type: "positive",
        position: "top",
        message: "Account Created Successfully",
        icon: "check_circle",
      });
    },
  },
});
</script>
<style>
.welcome-user {
  font-size: 40px;
}
</style>
