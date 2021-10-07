<template>
  <div>
    <AccueilHero />
    <AccueilOffreBandeau />
    <AccueilYoutubeBandeau />
    <AccueilFooter />
    <AccueilFormulaireModale
      v-if="showFormSuccessModal"
      @hide="showFormSuccessModal = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccueilHero from '../components/accueil/AccueilHero.vue';
import AccueilOffreBandeau from '../components/accueil/AccueilOffreBandeau.vue';
import AccueilYoutubeBandeau from '../components/accueil/AccueilYoutubeBandeau.vue';
import AccueilFooter from '../components/accueil/AccueilFooter.vue';
import AccueilFormulaireModale from '../components/accueil/AccueilFormulaireModale.vue';

export default Vue.extend({
  layout: 'default',

  components: {
    AccueilHero,
    AccueilOffreBandeau,
    AccueilYoutubeBandeau,
    AccueilFooter,
    AccueilFormulaireModale,
  },

  data() {
    return {
      showFormSuccessModal: false,
    }
  },

  mounted() {
    console.log(this.$route.query.form);
    if (this.$route.query.form && this.$route.query.form === 'success') {
      this.showFormSuccessModal = true;
    }
  },
});
</script>
