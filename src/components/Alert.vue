<template>
<div class="hidden-sm-and-down">
    <v-alert
            :fullscreen="$vuetify.breakpoint.xsOnly"
            color="primary"
            dark
            icon="notifications_none"
            border="left"
            prominent
            elevation="2"
            v-model="alert"
            dismissible
            class="hidden-sm-and-down ma-0"
            dense
            transition="scale-transition"
    >
        <small>Jun 17, 2021, 13:25</small>
        <span class="pl-2"><small><b>YUMAPOS</b>, announces "Due to popular demand, crypto currency integration is now under developement"
        </small></span>
    </v-alert>
</div>
</template>

<script>
    export default {
        name: "Alert"
    }
</script>

<style scoped>

</style>
