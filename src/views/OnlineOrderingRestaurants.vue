<template>
  <div class="home">
    <RestaurantOnlineOrdering />
    <RestaurantOnlineOrdering2 />
    <RestaurantOnlineOrdering3 />
    <RestaurantPos3 />
    <HelloBot4 />
  </div>
</template>

<script>
// @ is an alias to /src
import RestaurantOnlineOrdering from "@/components/RestaurantOnlineOrdering.vue";
import RestaurantOnlineOrdering2 from "@/components/RestaurantOnlineOrdering2.vue";
import RestaurantOnlineOrdering3 from "@/components/RestaurantOnlineOrdering3.vue";
import HelloBot4 from "@/components/HelloBot4.vue";
import RestaurantPos3 from "@/components/RestaurantPos3.vue";

export default {
  name: "onlineorderingrestaurants",
  components: {
    RestaurantOnlineOrdering,
    RestaurantOnlineOrdering2,
    RestaurantOnlineOrdering3,
    HelloBot4,
    RestaurantPos3,
  }
};
</script>
