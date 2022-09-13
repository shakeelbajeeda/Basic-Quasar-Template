<template>
  <q-list dark>
    <q-expansion-item
      group="same_group"
      v-for="item in items"
      :key="item"
      :class="item.sub_menu.length ? '' : 'custom-exp'"
      class="q-py-sm text-subtitle1"
      :icon="item.icon"
      :label="item.label"
      :to="item.sub_menu.length ? '' : item.link"
      :default-opened="isExpended(item)"
    >
      <q-card-section>
        <q-list class="text-center bg-dark text-white text-uppercase text-subtitle1">
          <q-item
            v-for="sub_item in item.sub_menu"
            :key="sub_item.link"
            v-bind="sub_item"
            clickable
            v-ripple
            class="q-py-sm"
            :to="sub_item.link"
          >
            <q-item-sec>
              <q-icon :name="sub_item.icon" size="1.6rem" />
            </q-item-sec>
            <q-item-section>{{ sub_item.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  name: 'EssentialLink',
  data() {
    return {
      is_match_found: false,
      items: [
        {
          label: 'Dashboard',
          icon: 'dashboard',
          link: '/dashboard',
          sub_menu: [],
        },
        {
          label: 'CRM Dashboard',
          icon: 'dashboard',
          link: '/crm_dashboard',
          sub_menu: []
        },
        {
          label: 'Pages',
          icon: 'pages',
          link: '/settings/company',
          sub_menu: [
            {
              label: 'Login',
              link: '/Login_page',
              icon: 'mail'
            },
            {
              label: 'Lock Screen',
              link: '/lock_screen',
              icon: 'lock'
            },
            {
              label: "Lock Screen2",
              link: '/lock_Screen2',
              icon: 'lock'
            },
            {
              label: "Pricing",
              link: '/pricing_page',
              icon: 'list'
            },
            {
              label: "User Profile",
              link: '/user_profile',
              icon: 'person'
            },
            {
              label: "Maintenance",
              link: '/Maintenance_page',
              icon: 'settings'
            }
          ]
        },
        {
          label: 'Mobile',
          icon: 'phone',
          link: '',
          sub_menu: [
             {
              label: "Main Page",
              link: '/mainPage',
              icon: 'home'
            },
             {
              label: "Login",
              link: '/Login',
              icon: 'lock'
            },

          ]
        },
        {
          label: 'Reports',
          caption: '',
          icon: 'get_app',
          link: '',
          sub_menu: [
            {
              label: 'Brokers Report',
              link: '/reports/brokers',
            },
            {
              label: 'Listings Weekly Report',
              link: '',
            },
            {
              label: 'Listings Monthly Report',
              link: '',
            },
            {
              label: 'Listings Yearly Report',
              link: '',
            }
          ],
        },
        {
          label: 'Announcements',
          caption: '',
          icon: 'notifications',
          link: '/supper-admin/announcements',
          sub_menu: [],
        },
        {
          label: 'Metrics',
          caption: '',
          icon: 'trending_up',
          link: '/supper-admin/metrics',
          sub_menu: [],
        },
        {
          label: 'Logout',
          icon: 'logout',
          link: '/auth/logout',
          sub_menu: [],
        }
      ]
    }
  },
  methods: {
    isExpended(list_item) {
      if (this.is_match_found) {
        return false
      }
      if (list_item.sub_menu) {
        this.is_match_found = list_item.sub_menu.find(sub_item => {
          return sub_item.link == this.$route.path
        })
      }
      if (this.is_match_found) {
        return true
      }
    }
  }
}
</script>
