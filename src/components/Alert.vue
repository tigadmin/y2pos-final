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
        <small>{{ new Date().getFullYear() }}</small>
        <span class="pl-2"><small><b>Y2POS</b> expands footprint to 10,000+ global installs. Y2POS INC. (864) 508-7140
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
