<template id="tela-login">
    <div class="q-pa-md row items-start q-gutter-md login-card">
        <q-card class="my-card">
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
            >
                <q-tab name="login" label="Entrar" ></q-tab>
                <q-tab name="register" label="Registrar" ></q-tab>            
            </q-tabs>
            <q-card-section>
                <img src="../../lib/images/logo.png" class='logo'>
                <!-- <div class="text-h6">Um Sonho Real</div>
                <div class="text-subtitle2">Bem VIndo!</div> -->
            </q-card-section>
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login">     
                    <app-login />
                </q-tab-panel>
                 <q-tab-panel name="register">     
                     <app-login />
                </q-tab-panel>
            </q-tab-panels>
            <!-- <app-register /> -->
           
        </q-card>
    </div>
</template>
<style lang="scss" >
    body {
        background: url('../../lib/images/bg.jpg') no-repeat 60% top/cover;
        height: 100%;
    }
    .login-card {
        display: flex;
        align-items: center; 
        justify-content: center;
        height: 100vh;
        .my-card {
            width: 280px;
            background: rgba(256, 256, 256, 0.7);
            .logo {
                max-height: 65px;
            }
            .q-tab-panels, .q-tab-panel {
                padding-top: 0px;
                background: rgba(256, 256, 256, 0);
            }
        }
    }
</style>
<script>
import LoginForm from './components/LoginForm.vue'
import registerForm from './components/registerForm.vue'
export default {
  // ...
    data() {
        return {
            userDate: {
                email: '',
                password: ''
            },
            tab: 'login'
        }
    },
    components: {
        appLogin: LoginForm,
        appRegister: registerForm,
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