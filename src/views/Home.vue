<template>
  <div class="home">
    <HelloWorld />
    <HelloTop />
    <HelloSecond />
    <HelloVideo />
    <HelloThird />
    <HelloBot />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloTop from "@/components/HelloTop.vue";
import HelloSecond from "@/components/HelloSecond.vue";
import HelloThird from "@/components/HelloThird.vue";
import HelloVideo from "@/components/HelloVideo.vue";
import HelloBot from "@/components/HelloBot.vue";
export default {
  name: "home",
  components: {
    HelloTop,
    HelloSecond,
    HelloThird,
    HelloBot,
    HelloVideo,
    HelloWorld
  }
};
</script>
