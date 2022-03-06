<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-dark text-white">
      <q-list>
        <!-- <q-item-label
          header
        >
          Essential Links
        </q-item-label>-->

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        <ExpansionLinks
          v-for="expansion in expansions"
          :key="expansion"
          :expansion_data="expansion"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
import ExpansionLinks from 'src/components/Expansionlinks/expansionlinks.vue';


const linksList = [
  {
    title: 'Dashboard',
    caption: '',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'CRM Dashboard',
    caption: '',
    icon: 'dashboard',
    link: '/crm_dashboard'
  },
  {
    title: 'Login',
    caption: '',
    icon: 'mail',
    link: '/Login_page'
  },
  {
    title: 'Lock Screen',
    caption: '',
    icon: 'lock',
    link: '/lock_screen'
  },
  {
    title: 'Lock Screen2',
    caption: '',
    icon: 'lock',
    link: '/lock_screen2'
  },
  {
    title: 'Facebook',
    caption: '',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: '',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },


];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    ExpansionLinks
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    return {
      expansions: [
        {
          link_icon: "pages",
          link_label: "Pages",
          expansion_data_link_icon: "mail",
          expansion_data_link_label: "Login"
        },
        {
          link_icon: "pages",
          link_label: "Pages",
          expansion_data_link_icon: "mail",
          expansion_data_link_label: "Login"
        },

      ]
    }
  }
})
</script>
