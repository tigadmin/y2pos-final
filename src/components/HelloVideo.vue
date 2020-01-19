<template>
    <section class="white">
        <video-bg color="rgba(0, 0, 0, 0.9)" :sources="['https://yumapos.co.uk/video/yuma_intro.webm']" img="https://www.yumapos.com/resources/yumapos_app/video/background.mp4" dark>
            <!-- If you want to add content here, a slot is waiting! -->
        </video-bg>
    </section>
</template>

<script>
    export default {
        name: "HelloVideo.vue"
    }
</script>

<style scoped>

</style>
