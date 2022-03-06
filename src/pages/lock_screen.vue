<template>
  <q-page style="background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg');background-repeat:no-repeat;background-size:cover;">
    <div class="flex" style="height:100vh;">
      <q-card :class="$q.screen.lt.sm ? 'unlock-card-sm' : 'unlock-card-md'">
        <q-img
          style="margin-top:-40px;border-radius:100%;"
          src="~assets/images/shakeel.jpg"
          width="33%"
          height="100px"
          class="shadow-1 q-pa-none q-ma-none"
        ></q-img>
          <q-card-section class="text-h6 q-pa-none">Shakeel Ahmad</q-card-section>
          <q-card-section>
            <q-form @submit="onLogin">
              <q-input
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
                label="Unlock"
                class="q-mt-sm"
                href="http://localhost:8080/#/dashboard"
              ></q-btn>
            </q-form>
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
    const password = ref(null)

    return {
      password,
      isPwd: ref(true),
    }
  }
}
</script>
