<template>
  <div>
    <form
      data-netlify="true"
      name="contact"
      method="POST"
      class="accueil-formulaire"
    >
      <h3>être recontacté(e)* :</h3>

      <label for="prenom" class="accueil-formulaire-label">
        <span>Prénom *</span>
        <input type="text" name="prenom" required>
      </label>

      <label for="nom" class="accueil-formulaire-label">
        <span>Nom *</span>
        <input type="text" name="nom" required>
      </label>

      <label for="societe" class="accueil-formulaire-label">
        <span>Société *</span>
        <input type="text" name="societe" required>
      </label>

      <label for="email" class="accueil-formulaire-label">
        <span>Email *</span>
        <input type="email" name="email" required>
      </label>

      <label for="quantite" class="accueil-formulaire-label">
        <span>Quantité désirée *</span>
        <input type="number" name="quantite" min="1" required>
      </label>

      <p class="text-xs">
        * Champs obligatoires
      </p>

      <button type="submit" class="accueil-formulaire-button">
        Envoyer
      </button>

      <p class="text-xs italic mt-3">
        Ces informations ne sont pas communiquées à des tiers.
      </p>
    </form>
  </div>
</template>
