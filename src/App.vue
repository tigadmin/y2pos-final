<template>
  <v-app id="App" dark>
    <v-navigation-drawer
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      app
      enable-resize-watcher
      overflow
      temporary
      v-model="primaryDrawer.model"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Y2POS
          </v-list-item-title>
          <v-list-item-subtitle>
            Advanced POS Systems
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item :key="item.title" :to="item.to" link v-for="item in items">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item>
        <v-list-item-content>
          <!--<v-list-item-title class="title">
            SUPPORT
          </v-list-item-title>
          <v-list-item-subtitle>
            Sales & Support
          </v-list-item-subtitle>-->
          <v-divider></v-divider>

        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item :key="contact.title" :to="contact.to" link v-for="contact in contacts">
          <v-list-item-icon>
            <v-icon>{{ contact.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="grey darken-4" dark>
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        v-if="primaryDrawer.type !== 'permanent'"
      ><i class="material-icons">
        menu
      </i></v-app-bar-nav-icon
      >
      <v-toolbar-title>
        <router-link to="/"
        >
          <!--suppress HtmlUnknownTarget -->
          <v-img
            alt="Y2POS Offical Logo"
            class="shrink mt-1"
            contain
            src="@/assets/y2pos-logo.png"
            transition="scale-transition"
            width="160"
            responsive
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>




<!--<template>
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
      <v-spacer></v-spacer>-->


      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn router
               to='/'
               exact>Home</v-btn>
        <v-btn router
               to='/restaurant-pos-platform'
               exact>POS Solution</v-btn>
        <v-btn flat router
               to='/online-ordering-restaurants'
               exact>Online Ordering</v-btn>
        <v-btn flat router
               to='/restaurant-website-mobile'
               exact>Mobile Apps</v-btn>
        <!--<v-btn flat router
               to='/store'
               exact>ORDER POS</v-btn>
        <v-btn flat router
               to='/partners'
               exact>Partners</v-btn>-->
        <v-btn
                router
                to='/meeting-y2'
                exact
                color="blue darken-4"
        >Schedule Meeting
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
      <span class="px-4 overline">&copy; {{ new Date().getFullYear() }} NET Studios Inc. <router-link to="/privacy">(864) 508-7140</router-link> | <router-link to="/privacy">Privacy</router-link> | <router-link to="/terms">Terms Of Use</router-link> | <router-link to="/support-y2pos">Documentation</router-link></span>
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
                to='/restaurant-support'
        ><i class="material-icons">help</i>
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
        { icon: 'important_devices', title: 'RESTAURANT POS', to: '/restaurant-pos-platform' },
        { icon: 'mobile_screen_share', title: 'RESTAURANT ORDERING', to: '/online-ordering-restaurants' },
        { icon: 'mobile_screen_share', title: 'RESTAURANT APPS', to: '/restaurant-website-mobile' },
        { icon: 'desktop_mac', title: 'START NOW', to: '/restaurant-support' },
      ],
      contacts: [
        { icon: 'phone', title: '(803) 932-8060' },
        { icon: 'email', title: 'sales@yumapos.com' },
        { icon: 'contact_support', title: 'jason@netstudiosinc.com' },
        { icon: 'library_books', title: 'Knowledge Base', to: '/guide' },
        { icon: 'supervisor_account', title: 'Submit Ticket', to: '/pos-ticket' },
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
