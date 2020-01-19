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
                    <h1 class="display-2 pb-5 font-weight-thin">Take Back Control Of Your Online Ordering</h1>
                    <h4 class="headline pb-5">
                        No Commission | No Fees | No Middle Man</h4>
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
        </v-parallax>
</template>

<script>
    export default {
        name: "RestaurantPos"
    }
</script>

<style scoped>

</style>
