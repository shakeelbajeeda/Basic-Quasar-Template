<template>
  <q-page style="background-image: linear-gradient(135deg,#7028e4,#e5b2ca);">
    <div class="flex" style="height:100vh;">
      <q-card :class="$q.screen.lt.sm ? 'login-card-sm' : 'login-card-md'">
        <q-img
          style="margin-top:-60px;border-radius:100%;"
          src="https://wordpress.betadelivery.com/helpyfolks/assets/uploads/312/2020-11-23-18-13-30dym.jpg"
          width="30%"
          class="shadow-10 q-pa-none q-ma-none"
        ></q-img>
        <q-card-section>
          <q-card-section class="text-h5 q-pa-none">Login</q-card-section>
          <q-card-section>
            <q-form @submit="onLogin">
              <q-input
                filled
                v-model="username"
                value="mehar"
                label="Username"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type username']"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                filled
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="Password"
                lazy-rules
                :rules="[
                  val => val !== null && val.length <= 8 && val.length >= 8 || 'password must have 8 characters',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-btn
                type="submit"
                color="dark"
                label="Login"
                class="float-left q-mt-sm"
                href="/dashboard"
              ></q-btn>
            </q-form>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const username = ref(null)
    const password = ref(null)

    return {
      username,
      password,
      isPwd: ref(true),
    }
  }
}
</script>
