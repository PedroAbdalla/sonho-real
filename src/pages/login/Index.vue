<template>
    <div class="q-pa-md row items-start q-gutter-md login-card">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h6">Um Sonho Real</div>
                <div class="text-subtitle2">Bem VIndo!</div>
            </q-card-section>
            <q-card-section>
                <div class="q-pa-md">
                    <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                    >
                        <q-input
                            filled
                            v-model="userDate.email"
                            label="Digite seu e-mail."
                        />
                        <q-input
                            filled
                            type="password"
                            v-model="userDate.password"
                            label="Digite sua senha."
                        />
                        <div>
                            <q-btn label="Logar" type="submit" color="primary"/>
                            <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>
<style scoped>
    .login-card {
        display: flex;
        align-items: center; 
        justify-content: center;
    }
</style>
<script>
export default {
  // ...
    data() {
        return {
            userDate: {
                email: '',
                password: ''
            }
        }
    },
  methods: {
    onSubmit () {
      if (this.userDate.email.length === 0 || this.userDate.password.length === 0) {
        this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-exclamation-triangle',
            message: 'Prencha os campos corretamente.'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Logando.'
        })
      }
    },
    onReset () {
      this.userDate.email = ''
      this.userDate.password = ''
    }
  },
  framework: {
    components: [
      'QCard',
      'QCardSection',
      'QCardActions'
    ]
  }
}
</script>