<template>
  <section class="accueil-offre-bandeau">
    <CFDomeLogoSimple
      :color="'#fcd2a4'"
      class="accueil-offre-bandeau-logo hidden lg:block"
    />
    <div class="flex flex-col items-center justify-center h-full relative z-10">
      <h3 class="accueil-offre-bandeau-title mt-4">
        3 tailles disponibles
      </h3>
      <p class="accueil-offre-bandeau-text">
        à partir de <span class="price">5 195 € net HT</span> ou <span class="price">169,97 € net HT/mois</span> en LOA** <br/>
         livraison incluse (France métropolitaine, hors Corse et îles)
      </p>
      <a href="#video-de-presentation">
        <ArrowDown
          :color="'white'"
          class="mb-2 cursor-pointer hidden lg:block"
        />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import CFDomeLogoSimple from '../shared/icons/CFDomeLogoSimple.vue';
import ArrowDown from '../shared/icons/ArrowDown.vue';

export default Vue.extend({
  components: {
    CFDomeLogoSimple,
    ArrowDown,
  },
});
</script>
