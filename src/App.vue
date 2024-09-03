<template>
  <div class="container">
    <h1 class="title is-3">Demande de suppression de compte</h1>
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">URL de suppression de compte</label>
        <div class="control">
          <input v-model="deletionUrl" class="input" type="url" placeholder="https://example.com/delete-account" required>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Nom de l'application ou du développeur</label>
        <div class="control">
          <input v-model="appName" class="input" type="text" placeholder="Nom de l'application" required>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Procédure de suppression</label>
        <div class="control">
          <textarea v-model="deletionProcedure" class="textarea" placeholder="Décrivez la procédure de suppression..." required></textarea>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Types de données supprimées ou conservées</label>
        <div class="control">
          <textarea v-model="dataHandling" class="textarea" placeholder="Précisez les types de données supprimées ou conservées..." required></textarea>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Durée de conservation supplémentaire</label>
        <div class="control">
          <input v-model="retentionPeriod" class="input" type="text" placeholder="Ex: 30 jours" required>
        </div>
      </div>
      
      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Envoyer la demande</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deletionUrl: '',
      appName: '',
      deletionProcedure: '',
      dataHandling: '',
      retentionPeriod: ''
    }
  },
  methods: {
    async submitForm() {
      const formData = {
        deletionUrl: this.deletionUrl,
        appName: this.appName,
        deletionProcedure: this.deletionProcedure,
        dataHandling: this.dataHandling,
        retentionPeriod: this.retentionPeriod
      }
      
      try {
        const response = await fetch('https://api.herotofu.com/v1/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          alert('Demande envoyée avec succès !');
          // Réinitialiser le formulaire
          Object.keys(this.$data).forEach(key => {
            this.$data[key] = '';
          });
        } else {
          throw new Error('Erreur lors de l\'envoi du formulaire');
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  }
}
</script>

<style>
@import 'bulma/css/bulma.min.css';

:root {
  --color-text:  #ffe100;
  --color-text-light: #ffe100;
  --color-text-dark:  #ffe100;
}

body, html {
  height: 100%;
}

.full-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

body {
  background-color: #1A0D0D;
  color: var(--color-text);
}

.title {
  color: var(--color-text-light);
}

.label {
  color: var(--color-text-dark);
}

.input, .textarea {
  background-color: #211211;
  color: var(--color-text);
  border-color: #311E1B;
}

.input:focus, .textarea:focus {
  border-color: var(--color-text);
}

.button.is-primary {
  background-color: #311E1B;
  color: var(--color-text-light);
}

.button.is-primary:hover {
  background-color: #271815;
}
</style>