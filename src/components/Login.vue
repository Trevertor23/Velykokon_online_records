<template>
    <div>
       Login: <input type="text" v-model="login">
       <br>Password: <input type="password" v-model="password">
       <button v-on:click="loging">Log In</button>
       <h1>{{result}}</h1>
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