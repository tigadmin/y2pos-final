<template>
  <div class="home">
    <HelloWorld />
    <HelloTop />
    <HelloWorld1 />
    <HelloThird />
    <HelloBot />
    <RestaurantPos3 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloTop from "@/components/HelloTop.vue";
import HelloWorld1 from "@/components/HelloWorld1.vue";
import HelloThird from "@/components/HelloThird.vue";
import HelloBot from "@/components/HelloBot.vue";
import RestaurantPos3 from "@/components/RestaurantPos3.vue";

export default {
  name: "home",
  components: {
    HelloWorld1,
    HelloTop,
    HelloThird,
    HelloBot,
    RestaurantPos3,
    HelloWorld,
  }
};
</script>
