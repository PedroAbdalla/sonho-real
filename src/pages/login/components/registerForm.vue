<template>
    <q-card-section>
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
                <!-- <div class="text-subtitle3">
                    Não tem uma conta? <a href="#"> Crie uma!</a>
                </div>                             -->
                <div>                         
                    <q-btn label="Logar" type="submit" color="primary"/>
                    <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>
    </q-card-section>    
</template>

<script>
export default {
    props: [],
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
}
</script>
