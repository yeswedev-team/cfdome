<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    this.initAxeptio();
    this.initAnalytics();
  },

  methods: {
    initAxeptio() {
      window.axeptioSettings = {
        clientId: process.env.AXEPTIO_CLIENT_ID,
      };

      (function (d, s) {
        var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
        e.async = true;
        e.src = "//static.axept.io/sdk-slim.js";
        t.parentNode.insertBefore(e, t);
      })(document, "script");
    },
    initAnalytics() {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', process.env.GA_MEASUREMENT_ID);
    },
  },
});
</script>
