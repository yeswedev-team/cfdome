<template>
  <div>
    <form
      data-netlify="true"
      name="contact"
      action="/?form=success"
      method="POST"
      class="accueil-formulaire"
    >
      <input type="hidden" name="subject" value="Nouvelle demande de contact via My CFDome">
      <input name="form-name" value="contact" type="hidden">
      <h3>être recontacté(e)* :</h3>

      <div class="double-input-container">
        <label for="prenom" class="accueil-formulaire-label">
          <span>Prénom *</span>
          <input type="text" name="prenom" required>
        </label>

        <label for="nom" class="accueil-formulaire-label">
          <span>Nom *</span>
          <input type="text" name="nom" required>
        </label>
      </div>

      <label for="societe" class="accueil-formulaire-label">
        <span>Société *</span>
        <input type="text" name="societe" required>
      </label>

      <label for="email" class="accueil-formulaire-label">
        <span>Email *</span>
        <input type="email" name="email" required>
      </label>

      <label for="telephone" class="accueil-formulaire-label">
        <span>Téléphone *</span>
        <input type="tel" name="telephone" required>
      </label>

      <div class="double-input-container">
        <label for="code_postal" class="accueil-formulaire-label">
          <span>Code Postal *</span>
          <input type="text" name="code_postal" required>
        </label>

        <label for="city" class="accueil-formulaire-label">
          <span>Ville *</span>
          <input type="text" name="city" required>
        </label>
      </div>

      <label for="pays" class="accueil-formulaire-label">
        <span>Pays *</span>
        <input type="text" name="pays" required>
      </label>

      <p class="text-xs">
        * Champs obligatoires
      </p>

      <button type="submit" class="accueil-formulaire-button">
        Envoyer
      </button>

      <p class="text-xs italic mt-3 text-center">
        Ces informations ne sont pas communiquées à des tiers.
      </p>
    </form>
  </div>
</template>
