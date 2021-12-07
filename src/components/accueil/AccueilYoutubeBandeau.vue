<template>
  <section
    id="video-de-presentation"
    class="accueil-youtube-bandeau py-12"
  >
    <Container>
      <iframe
        class="m-auto"
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/j_EgSeL1CbY?utm_source=my-cfdome.fr&utm_medium=YouTube&utm_id=CFDome"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '../shared/layouts/Container.vue';

export default Vue.extend({
  components: {
    Container,
  },
});
</script>
