<template>
  <div class="pos">
    <RestaurantPos />
    <RestaurantPos1 />
    <RestaurantPos2 />
    <RestaurantPos3 />
    <HelloBot />
  </div>
</template>
<script>
// @ is an alias to /src
import RestaurantPos from "@/components/RestaurantPos.vue";
import RestaurantPos1 from "@/components/RestaurantPos1.vue";
import RestaurantPos2 from "@/components/RestaurantPos2.vue";
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import HelloBot from "@/components/HelloBot.vue";

export default {
  name: "pos",
  components: {
    RestaurantPos,
    RestaurantPos1,
    RestaurantPos2,
    RestaurantPos3,
    HelloBot
  }
};
</script>
