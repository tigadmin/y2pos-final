<template>
    <section class="white pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <div class="text-xs-center ma-5 pt-5 pb-5" align="center">
                        <div class="flex display-1 font-weight-light pb-3">Marketing Tools Built-In
                        </div>
                        <div class="flex font-weight-light font-weight-light">
                            Y2POS syncs across all locations, devices, and channels allowing you to manage your restaurant more efficiently.                        </div>
                    </div>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Customer Engagement" contain src="img/restaurant/web-apps-pos.jpg">
                        </v-img>
                        <v-card-title class="justify-center">Mobile & Web Apps</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            IOS, Android apps and website integrated out-of-the-box. Easily update your in-store menu and replicate it across all users and devices.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Restaurant Branding" contain src="img/restaurant/payment-processing-restaurant-pos.jpg">
                        </v-img>
                        <v-card-title class="justify-center">Marketing Automation</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">Send customer notifications instantly to encourage repeat visits and keep your customers tuned in.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Restaurant Branding" contain src="img/restaurant/promos-notifications2-720-400.jpg">
                        </v-img>
                        <v-card-title class="justify-center">Push & SMS Messaging</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            Send notifications of upcoming events, specials, promotions, and invitations via email, push notifications and SMS messaging.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  export default {
    name: "RestaurantPos3.vue"
  };
</script>

<style scoped>

</style>
