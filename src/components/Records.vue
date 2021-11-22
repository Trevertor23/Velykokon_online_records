<template> 
  <div class="container">
    <h2 align="center">Таблиця записів</h2>
    <table class="records" cellspacing="0" cellpadding="10px">
                    <tr>
                        <th>Дата</th>
                        <th>Час</th>
                        <th>Зайнято</th>
                    </tr>
                    <tr v-for="rec in records" v-bind:key="rec.id" v-bind:style="rec.isBusy ? 'background-color:#ccc' : ''">
                        <td>{{rec.date}}</td>
                        <td>{{rec.time}}</td>
                        <td>{{rec.isBusy}}</td>
                        <td><button v-on:click="makeBusy(rec.id)">Зайняти</button></td>
                    </tr>
    </table>
    <hr>
    <h2 align="center">Додати новий запис</h2>
    <div class="form" style="background-color:#fff; align-items:center; border-radius: 10px; -webkit-box-shadow: 1px 3px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 1px 3px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 1px 3px 8px 0px rgba(34, 60, 80, 0.2);">
        <p>
            <label for="date">Дата:</label><br>
            <input type="date" id="date" required v-model="date" name="date"><br>
            <label for="time">Час:</label><br>
            <input type="time" id="time" style="width:70px" required v-model="time" name="time"><br>
            <label for="radio">Зайнято:</label>
            <!-- <input type="radio" id="radio" name="radio" required value="1" v-model="busy"> or <input type="radio" id="radio" name="radio" required checked value="0" v-model="busy"><br> -->
            <input type="checkbox" name="busy" value="true" v-model="busy"><br>
            <label for="phone">Номер телефона:</label><br>
            <input type="number" id="phone" v-model="phone" name="phone">
        </p>
        <p><input type="button" value="Додати запис" v-on:click="addRecord"></p>
    </div>


        <!-- <table>
            <tr>
                <td>Дата</td>
                <td>Час</td>
                <td>Зайнято</td>
                <td>Номер телефона</td>
            </tr>
             <tr>
                <td><input type="date" required v-model="date" name="date"></td>
                <td><input type="time" style="width:70px" required v-model="time" name="time"></td>
                <td><table cellspacing="10px">
                        <tr>
                            <td>Так</td>
                            <td>Ні</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="radio" name="radio" required value="1" v-model="busy"></td>
                            <td><input type="radio" id="radio" name="radio" required checked value="0" v-model="busy"></td> 
                        </tr>
                    </table></td>
                <td><input type="number" v-model="phone" name="phone"></td>
            </tr>
        </table> -->

        <!-- <input type="button" value="Add" v-on:click="addRecord"> -->
    
    {{busy}}
  </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
 
   export default {
        data: function() {
           return {
            busy:false,
            date:"",
            time:"12:00",
            phone:0,

            records:[
                        {id:1,spec:1,date:"2021/10/28",time:"16:00",isBusy:false,idOfUser:0},
                        {id:2,spec:1,date:"2021/10/28",time:"17:00",isBusy:false,idOfUser:0},
                        {id:3,spec:1,date:"2021/10/30",time:"15:00",isBusy:false,idOfUser:0},
                        {id:4,spec:1,date:"2021/10/30",time:"16:00",isBusy:false,idOfUser:0},
                        {id:5,spec:1,date:"2021/10/31",time:"15:00",isBusy:false,idOfUser:0}
                    ],
        }},
        mounted: function(){
            axios.get("http://127.0.0.1:1234/").then((response)=>{
                    console.log(response.data);
                    this.records = response.data;
                })
        },
        methods:{
            makeBusy: function(id){
                this.records[this.records.findIndex(rec => id==rec.id)].isBusy = true;
            },
            addRecord: function(){
                if(this.date=="") return 0;
                    axios.post("http://127.0.0.1:1234/add", {
                    date: this.date,
                    time: this.time,
                    busy: this.busy,
                    phone: this.phone
                })
                .then((response) => {
                    console.log(response.data)
                })
            }
        }
    }
</script>
<style scoped>
    
</style>