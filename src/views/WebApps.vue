<template>
  <div class="webapps">
    <WebView />
    <WebView2 />
    <RestaurantPos3 />
    <HelloBot5 />
  </div>
</template>

<script>
// @ is an alias to /src
import WebView from "@/components/WebView.vue";
import WebView2 from "@/components/WebView2.vue";
import HelloBot5 from "@/components/HelloBot5.vue";
import RestaurantPos3 from "@/components/RestaurantPos3.vue";

export default {
  name: "home",
  components: {
    WebView,
    WebView2,
    HelloBot5,
    RestaurantPos3
  }
};
</script>
