<template>
    <div class="login">
        <div  class="login-form">
            <h1>Авторизація</h1>
            <!-- <input type="text" v-model="login" placeholder="Введіть логін" class="login-input">
            <br><input type="password" v-model="password" placeholder="Пароль" class="login-input"><br><br> -->
            <div class="form-label-group">
                <input type="login" id="inputEmail" class="form-control" placeholder="Логін" required autofocus v-model="login">
                <label for="inputEmail">Введіть логін</label>
            </div>

            <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required v-model="password">
                <label for="inputPassword">Пароль</label>
            </div>
            <button v-on:click="loging" class="login-btn">Log In</button>
            <h3>{{result}}</h3>
            
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