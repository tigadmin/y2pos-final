<template>
  <div class="support">
    <SupportOne />
    <SupportForm />
    <RestaurantPos3 />
    <HelloBot6 />
  </div>
</template>


<script>
  // @ is an alias to /src
  import SupportOne from "@/components/SupportOne.vue";
  import SupportForm from "@/components/SupportForm.vue";
  import RestaurantPos3 from "@/components/RestaurantPos3.vue";
  import HelloBot6 from "@/components/HelloBot6.vue";

  export default {
    name: "support",
    components: {
      SupportOne,
      SupportForm,
      HelloBot6,
      RestaurantPos3,
    }
  };
</script>
