<template>
  <q-page class="bg-pink overflow-hidden">
    <q-btn
      color="pink-10"
      icon="keyboard_backspace"
      round
      class="q-mt-md q-ml-md"
      href="/dashboard"
    />
    <div class="flex" style="height: 100vh;">
      <q-card flat class="transparent text-center text-white" style="margin:auto;">
        <q-icon name="settings" size="4rem" />
        <q-icon name="warnings" class="q-ml-xl" size="4rem" />
        <q-item>
          <q-item-label class="text-h3">Under Maintenance</q-item-label>
        </q-item>
        <q-item-label class="text-h6">Our site is Under Maintenance. We will be back shortly.</q-item-label>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  setup() {

    return {

    }
  }
}
</script>
