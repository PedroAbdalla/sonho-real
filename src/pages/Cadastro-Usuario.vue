<template>
  <div class="row justify-center">
    <div class="col-12 col-md-auto">
      <div class="q-pa-md">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Nome *"
            hint="Nome e sobrenome"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            type="email"
            v-model="email"
            label="Seu email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            type="password"
            v-model="password"
            label="Senha *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import { postCadastro } from "../utils/api";

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      accept: false
    };
  },

  methods: {
    async onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "fas fa-exclamation-triangle",
          message: "You need to accept the license and terms first"
        });
      } else {
        const data = {
          username: this.name,
          email: this.email,
          password: this.password
        };

        await postCadastro(data).then(resp => console.log(resp));
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "fas fa-check-circle",
          message: "Salvo"
        });
        this.$routes.push({
          path: "/login"
        });
      }
    },

    onReset() {
      this.name = null;
      this.email = null;
      this.password = false;
    }
  }
};
</script>