<template>
  <div class="pos">
    <RestaurantPos />
  </div>
</template>

<script>
    // @ is an alias to /src
    import RestaurantPos from "@/components/RestaurantPos";
    export default {
        name: "pos",
        components: {
            RestaurantPos
        }
    };
</script>
