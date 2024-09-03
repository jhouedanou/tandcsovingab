<template>
  <div class="thank-you-container">
    <h1 class="title is-2">Merci pour votre demande !</h1>
    <p class="subtitle">Nous avons bien reçu votre demande de suppression de compte.</p>
    <p>Nous traiterons votre demande dans les plus brefs délais.</p>
    <button class="button is-primary mt-4" @click="retourAccueil">Retour à l'accueil</button>
  </div>
</template>

<script>
export default {
  name: 'ThankYou',
  methods: {
    retourAccueil() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.thank-you-container {
  text-align: center;
  padding: 2rem;
}
</style>