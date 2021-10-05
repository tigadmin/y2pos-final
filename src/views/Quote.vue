<template>
  <div class="quote">
    <Quoteco />
    <RestaurantPos3 />
    <HelloBot5 />
  </div>
</template>

<script>
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import Quoteco from "@/components/Quoteco.vue";
import HelloBot5 from "@/components/HelloBot5.vue";

export default {
  name: "quoteco",
  components: {
    HelloBot5,
    Quoteco,
    RestaurantPos3
  }
};
</script>
