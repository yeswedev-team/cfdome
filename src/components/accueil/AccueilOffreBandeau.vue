<template>
  <section class="accueil-offre-bandeau">
    <CFDomeLogoSimple
      :color="'#fcd2a4'"
      class="accueil-offre-bandeau-logo hidden lg:block"
    />
    <div class="flex flex-col items-center justify-center h-full relative z-10">
      <h3 class="accueil-offre-bandeau-title mb-3">
        3 tailles disponibles
      </h3>
      <p class="accueil-offre-bandeau-text">
        à partir de <span class="price">4 470 € HT</span> ou <span class="price">148 € HT/mois</span> en LOA**
      </p>
      <ArrowDown
        :color="'white'"
        class="mt-4 w-16 h-12 cursor-pointer hidden lg:hidden"
      />
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
