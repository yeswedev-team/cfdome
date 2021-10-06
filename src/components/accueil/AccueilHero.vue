<template>
  <section class="accueil-hero">
    <div class="accueil-hero-container ">
      <Container class="lg:flex pt-16">
        <div class="accueil-hero-text p-6">
          <img
            src="~assets/images/cfdome_logo_blanc.svg"
            alt="Logotype de CF Group"
            class="w-full mb-4 max-w-sm xl:max-w-md"
          >
          <h1 class="accueil-hero-title">
            <span class="sr-only">CFDome</span>
            l'abri gonflable pour <br>
            chantier de piscine.
          </h1>
          <p class="accueil-hero-subtitle">
            Que ce soit en construction, ou en rénovation, CFDome sécurise votre planning et assure votre trésorerie. On vous parie que vous vous demanderez comment vous avez travaillé sans jusqu'ici !
          </p>
        </div>
        <div class="p-6">
          <AccueilFormulaire />
        </div>
      </Container>
      <div class="accueil-hero-sidebar-badges">
        <div class="accueil-hero-sidebar-badges-container lg:pt-16">
          <div class="badge badge--shadow">
            <img src="~assets/images/fabrication-europeenne.svg" alt="Badge de la fabrication européenne">
          </div>
          <div class="badge badge--shadow">
            <img src="~assets/images/systeme-brevete.svg" alt="Badge du système breveté">
          </div>
          <div class="cf-group-logo lg:mt-auto">
            <p class="w-full text-center mb-1 text-lg">
              un produit
            </p>
            <img src="~assets/images/cf-group-logo.svg" alt="Logotype de CF Group">
          </div>
        </div>
      </div>
    </div>
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
