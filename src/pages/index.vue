<template>
  <div>
    <AccueilHero />
    <AccueilOffreBandeau />
    <AccueilYoutubeBandeau />
    <AccueilFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccueilHero from '../components/accueil/AccueilHero.vue';
import AccueilOffreBandeau from '../components/accueil/AccueilOffreBandeau.vue';
import AccueilYoutubeBandeau from '../components/accueil/AccueilYoutubeBandeau.vue';
import AccueilFooter from '../components/accueil/AccueilFooter.vue';

export default Vue.extend({
  layout: 'default',

  components: {
    AccueilHero,
    AccueilOffreBandeau,
    AccueilYoutubeBandeau,
    AccueilFooter,
  },
});
</script>
