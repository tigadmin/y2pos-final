<template>
    <v-footer
            color="grey lighten-5"
            padless
            dark
    >
        <v-row
                justify="center"
                no-gutters
        >
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="black"
                    text
                    rounded
                    class="my-2 grey--text"
            >
                {{ link }}
            </v-btn>
            <v-col
                    class="grey lighten-4 py-4 text-center grey--text"
                    color="black"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>YUMAPOS INC. Call (803) 509-0090</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }

</script>

<style scoped>

</style>
