<template>
    <div class="login">
        <div align="center" class="login-form">
            <h1>Авторизація</h1>
            <input type="text" v-model="login" placeholder="Введіть логін" class="login-input">
            <br><input type="password" v-model="password" placeholder="Пароль" class="login-input"><br><br>
            <button v-on:click="loging" class="login-btn">Log In</button>
            <h1>{{result}}</h1>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                login:"",
                password:"",
                result:"",
            };
        },
        mounted: function() {
            
        },
        methods:{
            loging: function() {
                if(this.login=="Trevertor" && this.password=="12345"){
                    this.result = "Success!";
                    this.$router.push('records');
                }
                else {this.result = "Error! Please try again!"}
            }
        }
    }
</script>