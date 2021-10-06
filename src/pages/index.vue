<template>
  <div>
    <AccueilHero />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccueilHero from '../components/accueil/AccueilHero.vue';

export default Vue.extend({
  layout: 'default',

  components: {
    AccueilHero,
  },
});
</script>
