<template>
  <div class="container">
    <h1 class="title is-3">Demande de suppression de compte</h1>
    
    <div v-if="showAlert" class="notification is-success">
      <button class="delete" @click="showAlert = false"></button>
      Votre demande a été envoyée avec succès. Nous la traiterons dans les plus brefs délais.
    </div>
    
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Nom d'utilisateur</label>
        <div class="control">
          <input v-model="username" class="input" type="text" placeholder="Votre nom d'utilisateur" required>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="Votre adresse email" required>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Données à supprimer</label>
        <div class="control">
          <textarea v-model="dataToDelete" class="textarea" placeholder="Précisez les données que vous souhaitez supprimer..." required></textarea>
        </div>
      </div>
      
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="confirmDeletion" required>
            Je comprends que la suppression de mes données est irrévocable et sera effectuée dans un délai de 5 jours.
          </label>
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
  name: 'App',
  data() {
    return {
      username: '',
      email: '',
      dataToDelete: '',
      confirmDeletion: false,
      showAlert: false
    }
  },
  methods: {
    async submitForm() {
      const formData = {
        username: this.username,
        email: this.email,
        dataToDelete: this.dataToDelete,
        confirmDeletion: this.confirmDeletion
      }
      
      try {
        const response = await fetch('https://public.herotofu.com/v1/40ad7790-69d7-11ef-a422-43999971b585', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          this.showAlert = true;
          this.resetForm();
        } else {
          throw new Error('Erreur lors de l\'envoi du formulaire');
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    },
    resetForm() {
      this.username = '';
      this.email = '';
      this.dataToDelete = '';
      this.confirmDeletion = false;
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