<template>
  <q-page>
    <div class="q-py-sm q-px-sm">
      <div class="row q-col-gutter-sm">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <q-card class="bg-purple-4 q-pb-xl">
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
                  color="cyan-9"
                  label="Add Photo"
                  class="q-mt-lg q-ml-md text-capitalize"
                  rounded
                />
              </div>
            </div>
            <div class="q-px-lg q-pt-md q-pb-md">
              <q-form class="row q-col-gutter-lg custom-form">
                <q-input
                  v-model="username"
                  label="User Name"
                  label-color="white"
                  class="col-md-6 col-xs-12"
                  style="color:rgb(255, 255, 255) !important;"
                />
                <q-input
                  v-model="emailaddress"
                  label-color="white"
                  label="Email Address"
                  class="col-md-6 col-xs-12"
                />
                <q-input
                  v-model="firstname"
                  label-color="white"
                  label="First Name"
                  class="col-md-6 col-xs-12"
                />
                <q-input
                  v-model="lastname"
                  label-color="white"
                  label="Last Name"
                  class="col-md-6 col-xs-12"
                />
                <q-input
                  v-model="address"
                  label-color="white"
                  label="Address"
                  class="col-md-12 col-xs-12"
                />
                <q-input
                  v-model="city"
                  label-color="white"
                  label="City"
                  class="col-md-6 col-xs-12"
                />
                <q-input
                  v-model="postalcode"
                  label-color="white"
                  label="Postal Code"
                  class="col-md-6 col-xs-12"
                />
                <q-input
                  v-model="about"
                  type="textarea"
                  label="About"
                  label-color="white"
                  color="white"
                  class="col-md-12 col-xs-12"
                />
              </q-form>
              <div class="float-right q-mt-md">
                <q-btn color="cyan-9" label="Update User Info" class="text-capitalize" />
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
          <q-card class="bg-purple-4 text-center text-white">
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
            >My name is Shakeel Ahmad. I noticed myself pulling into programming since 2021, and then determined myself to become a skilled and knowledgeable programmer. My passion for my programming increases as I started working for Incentius (where I am currently working in).</q-card-section>
          </q-card>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <q-card class="bg-purple-4 q-pb-xl">
            <q-card-section class="text-white text-h5 q-pb-none">Change Password</q-card-section>
            <div class="q-px-lg q-pt-md q-pb-md">
              <q-form class="row q-col-gutter-lg custom-form">
                <div class="col-md-4 text-white text-body1 q-mt-md">Current Password</div>
                <q-input
                  outlined
                  clearable
                  bottom-slots
                  v-model="currentpassword"
                  label-color="white"
                  label="Current Password"
                  counter
                  maxlength="8"
                  :dense="dense"
                  class="col-md-8 col-xs-12"
                />
                <div class="col-md-4 text-white text-body1 q-mt-md">New Password</div>
                <q-input
                  outlined
                  clearable
                  bottom-slots
                  v-model="newpassword"
                  label-color="white"
                  label="New Password"
                  counter
                  maxlength="8"
                  :dense="dense"
                  class="col-md-8 col-xs-12"
                />
                <div class="col-md-4 text-white text-body1 q-mt-md">Confirm New Password</div>
                <q-input
                  outlined
                  clearable
                  bottom-slots
                  v-model="confirmpassword"
                  label-color="white"
                  label="Confirm New Password"
                  counter
                  maxlength="8"
                  :dense="dense"
                  class="col-md-8 col-xs-12"
                />
              </q-form>
              <div class="float-right q-mt-md">
                <q-btn color="cyan-9" label="Change Password" class="text-capitalize" />
              </div>
            </div>
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
    const currentpassword = ref('')
    const newpassword = ref('')
    const confirmpassword = ref('')

    return {
      username,
      emailaddress,
      firstname,
      lastname,
      address,
      city,
      postalcode,
      about,
      currentpassword,
      newpassword,
      confirmpassword


    }
  }
}
</script>
