<template>
  <section class="accueil-hero">
    <div class="accueil-hero-container ">
      <div class="mx-auto lg:px-8 lg:max-w-6xl xl:max-w-6xl lg:flex lg:pt-16">
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
          <a
            href="#video-de-presentation"
            class="button button--white-orange inline-block w-fit-content"
          >
            Voir la vidéo de présentation
          </a>
        </div>
        <div class="lg:p-6">
          <AccueilFormulaire />
        </div>
      </div>
      <div class="accueil-hero-sidebar-badges">
        <div class="accueil-hero-sidebar-badges-container lg:pt-16">
          <div class="badge badge--shadow">
            <img src="~assets/images/systeme-brevete.svg" alt="Badge du système breveté">
          </div>
          <div class="cf-group-logo lg:mt-auto">
            <p class="w-full text-center mb-1 text-lg">
              un produit
            </p>
            <a href="https://www.my-cfgroup.fr/fr/recherche?search=cfdome" target="_blank">
              <img src="~assets/images/cf-group-logo.svg" alt="Logotype de CF Group">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
