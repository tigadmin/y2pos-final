<template>
  <v-app>
    <v-app-bar app color="grey darken-4" dark>
      <v-app-bar-nav-icon><i class="material-icons">menu</i></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="YUMAPOS Offical Logo"
          class="shrink mt-1"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="160"
          responsive
        />
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn router
               to='/'
               exact>Home</v-btn>
        <v-btn router
               to='/restaurant-pos-platform'
               exact>Restaurant POS</v-btn>
        <v-btn flat router
               to='/online-ordering-restaurants'
               exact>Online Ordering</v-btn>
        <v-btn flat router
               to='/restaurant-website-mobile'
               exact>Web & Mobile Apps</v-btn>
        <v-btn
                router
                to='/restaurant-support'
                exact
                color="blue darken-4"
        >Contact
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
        <router-view/>
    </v-content>
    <v-footer
            :inset="footer.inset"
            app
            dense
            dark
    >
      <span class="px-4 overline">&copy; {{ new Date().getFullYear() }} NET Studios Inc. <router-link to="/privacy">Privacy</router-link> | <router-link to="/terms">Terms Of Use</router-link></span>
      <v-col cols="12" sm="12" md="6">
        <v-btn
                absolute
                dark
                fab
                top
                right
                @click="dialog2 = true"
                router
                color="green darken-1"
                class="ma-2"
                to='/meeting'
        ><i class="material-icons">event_available</i>
        </v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    mounted () {
      window.scrollTo(0, 0);
    },
    data: () => ({
      icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
      ],
      message: [
        '123'
      ],
      items: [
        { icon: 'store', title: 'HOME', to: '/' },
        { icon: 'important_devices', title: 'WEBSITE DESIGN', to: '/webdesign/small-business-website-marketing.html' },
        { icon: 'mobile_screen_share', title: 'DIGITAL MARKETING', to: '/digitalmarketing/local-business-digital-marketing.html' },
        { icon: 'mobile_screen_share', title: 'HOW IT WORKS', to: '/works/local-business-web.html' },
        { icon: 'public', title: 'PRICING', to: '/pricing/web-app-local-business-pricing/html' },
        { icon: 'desktop_mac', title: 'CONTACT US', to: '/start/start-now.html' },
        { icon: 'group', title: 'INSIDER ACCESS', to: '/marketing' },
        { icon: 'phone', title: '(803) 560-4913' },
      ],
      contact: [
        { icon: 'phone', title: '(803) 560-4913' },
        { icon: 'email', title: 'jason@netstudiosinc.com' },
        { icon: 'contact_support', title: 'support@netstudiosinc.com' },
        { icon: 'library_books', title: 'Knowledge Base', to: '/ghost' },
        { icon: 'supervisor_account', title: 'Submit Ticket', to: '/ticket' },
        { icon: 'library_books', title: 'Brochure', to: '/brochure' },
      ],
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
      return: {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
      },
    }),
  }
</script>
