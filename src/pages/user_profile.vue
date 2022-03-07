<template>
  <q-page>
    <div class="q-py-sm q-px-sm">
      <div class="row q-col-gutter-sm">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <q-card class="bg-deep-orange-4 q-pb-xl">
            <q-card-section class="text-white text-h5 q-pb-none">Edit Profile</q-card-section>
            <q-card-section class="text-white text-subtitle1 q-pt-none">Complete your profile</q-card-section>
            <div class="row">
              <q-img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                width="15%"
                style="border-radius:100%;"
                class="q-ml-md"
              />
              <div class="vertical-middle">
                <q-btn
                  color="cyan-12"
                  label="Add Photo"
                  class="q-mt-lg q-ml-md text-capitalize"
                  rounded
                />
              </div>
            </div>
            <div class="q-px-lg q-pt-md q-pb-md">
              <q-form class="row q-col-gutter-lg">
                <q-input
                  v-model="username"
                  label="User Name"
                  class="col-md-6 col-xs-12"
                  style="color:rgb(255, 255, 255) !important;"
                />
                <q-input v-model="emailaddress" label="Email Address" class="col-md-6 col-xs-12" />
                <q-input v-model="firstname" label="First Name" class="col-md-6 col-xs-12" />
                <q-input v-model="lastname" label="Last Name" class="col-md-6 col-xs-12" />
                <q-input v-model="address" label="Address" class="col-md-12 col-xs-12" />
                <q-input v-model="city" label="City" class="col-md-6 col-xs-12" />
                <q-input v-model="postalcode" label="Postal Code" class="col-md-6 col-xs-12" />
                <q-input
                  v-model="about"
                  type="textarea"
                  label="About"
                  color="white"
                  class="col-md-12 col-xs-12"
                />
              </q-form>
              <div class="float-right q-mt-md">
                <q-btn color="cyan-12" label="Update User Info" class="text-capitalize" />
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="bg-deep-orange-4 text-center text-white">
            <q-card-section>
              <q-img
                src="https://quasar-admin-demo.netlify.app/profile.svg"
                width="40%"
                style="border-radius:100%;"
                class="q-ml-md"
              />
            </q-card-section>
            <q-card-section class="text-body2">by Shakeel Ahmad</q-card-section>
            <q-card-section class="text-h6 q-pt-none text-bold">Shakeel Ahmad</q-card-section>
            <q-card-section
              class="text-subtitle2 text-justify"
            >My name is Shakeel Ahmad. I noticed myself pulling into programming since 2022, and then determined myself to become a skilled and knowledgeable programmer. My passion for my programming increases as I started working for Incentius (where I am currently working in).</q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  setup() {
    const username = ref('')
    const emailaddress = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const address = ref('')
    const city = ref('')
    const postalcode = ref('')
    const about = ref('')

    return {
      username,
      emailaddress,
      firstname,
      lastname,
      address,
      city,
      postalcode,
      about


    }
  }
}
</script>
