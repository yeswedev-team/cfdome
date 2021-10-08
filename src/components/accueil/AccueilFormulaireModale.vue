<template>
  <div class="accueil-formulaire-modale flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-30">
    <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded m-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 rounded-2xl p-3 border border-green-100 text-green-400 bg-green-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="flex flex-col ml-3">
            <div class="font-medium leading-none">
              Envoyé
            </div>
            <p class="text-sm text-gray-600 leading-none mt-1">
              Votre demande de contact à bien été enregistrée.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="accueil-formulaire-modale-button flex-no-shrink px-5 py-2 mt-6 text-md shadow-sm hover:shadow-lg font-extrabold tracking-wider text-white rounded-lg"
          @click="emitHide"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    emitHide() {
      console.log('emitHide before');
      this.$emit('hide');
      console.log('emitHide after');
    },
  }
});
</script>
