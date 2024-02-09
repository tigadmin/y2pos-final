<template>
        <v-parallax
                dark
                src="/img/img/05-02.png"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col class="text-center" cols="12">
                    <h1 class="display-2 pb-5 font-weight-thin">Cloud Based POS System</h1>
                    <h4 class="headline pb-5">
                      Robust, customizable, and scalable point-of-sale platform designed for businesses of any size.
                    </h4>
                  <router-link to="/restaurant-support">
                    <v-btn @click.stop="dialog = !dialog" aria-label="Website Pricing" color="light-blue darken-4" dark class="ma-2" round>
                      Schedule Your Demo
                    </v-btn>
                  </router-link>
                  <div class="mt-2">
                      <img alt="Restaurant POS Review" height="20" responsive src="/img/img/top-local-marketing.png"></div>
                  <p class="font-weight-regular text--grey darken-1">
                      24/7 Support | (803) 932-8060
                  </p>
              </v-col>
          </v-row>
      </v-parallax>
</template>

<script>
  export default {
      name: "RestaurantPos"
  }
</script>

<style scoped>

</style>
