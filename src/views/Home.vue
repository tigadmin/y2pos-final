<template>
  <div class="home">
    <Alert />
    <HelloWorld />
    <HelloTop />
    <HelloWorld1 />
    <RestaurantPos3 />
    <HelloThird />
    <HelloBot2 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloTop from "@/components/HelloTop.vue";
import HelloWorld1 from "@/components/HelloWorld1.vue";
import HelloThird from "@/components/HelloThird.vue";
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import HelloBot2 from "@/components/HelloBot2.vue";
import Alert from "@/components/Alert.vue";

export default {
  name: "home",
  components: {
    HelloWorld1,
    Alert,
    HelloTop,
    HelloThird,
    HelloBot2,
    RestaurantPos3,
    HelloWorld,
  }
};
</script>
