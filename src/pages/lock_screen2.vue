<template>
  <q-page
    class="flex flex-center"
    style="background-image:linear-gradient(135deg,#7028e4,#e5b2ca);"
  >
    <q-img
      style="border-radius:100%;"
      src="~assets/images/shakeel.jpg"

      :class="$q.screen.lt.sm ? 'unlock2-pic-sm' : 'unlock2-pic-md'"
    ></q-img>
    <div class="q-pl-md">
      <q-card-section class="text-h6 q-pa-none q-ml-md text-grey-4">Shakeel Ahmad</q-card-section>
      <q-card-section class="q-pa-none">
        <q-form color="white">
          <q-input
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            label-color="grey-13"
            lazy-rules
            :rules="[
              val => val !== null && val.length <= 8 && val.length >= 8 || 'password must have 8 characters',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="grey-13" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                color="grey-13"
              />
            </template>
          </q-input>
        </q-form>
      </q-card-section>
    </div>
    <div>
        <q-btn
            type="submit"
            color="light-blue"
           icon="arrow_right_alt"
           class="q-mt-sm q-ml-md"
           round
            href="/dashboard"
          ></q-btn>
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
