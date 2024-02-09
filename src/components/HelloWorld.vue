<template>
  <v-parallax src="/img/img/main-banner-pos.jpg" alt="POS System For Restaurants" cover max-width="1900" height="720">
    <v-layout
            align-center
            column
            justify-center
    >
      <h1 class="d-flex pa-2 display-2 font-weight-thin">World-Class Point-Of-Sale Software</h1>
      <h4 class="headline pb-5">Elevate your business with our award-winning POS solution designed for hospitality and retail</h4>
       <router-link to="/meeting-y2">
         <v-btn @click.stop="dialog = !dialog" aria-label="Website Pricing" color="light-blue darken-4" dark class="ma-2" round>
           Schedule Your Demo
         </v-btn>
       </router-link>
       <div class="mt-2">
         <img alt="Restaurant POS Review" height="20" responsive src="/img/img/top-local-marketing.png"></div>
       <p class="font-weight-regular text--grey darken-1">
         24/7 Support | (803) 932-8060
       </p>
     </v-layout>
   </v-parallax>


     <!--<v-parallax
             dark
             src="/img/img/main-banner-pos.jpg"
     >
       <v-row
               align="center"
               justify="center"
       >
         <v-col class="text-center" cols="12">
           <h1 class="display-2 pb-5 font-weight-thin">Advanced Restaurant POS Platform</h1>
           <h4 class="headline pb-5">A world-class point-of-sale software that syncs across all digital channels through a single, powerful platform.</h4>
           <router-link to="/start/start-now.html">
             <v-btn @click.stop="dialog = !dialog" aria-label="Website Pricing" color="light-blue darken-4" dark class="ma-2" round>
               Schedule Your Demo
             </v-btn>
           </router-link>
           <div class="mt-2">
             <img alt="Restaurant POS Review" height="20" responsive src="/img/img/top-local-marketing.png"></div>
           <p class="font-weight-regular text--grey darken-1">
             24/7 Support | (803) 354-2363
           </p>
         </v-col>
       </v-row>
     </v-parallax>-->
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
