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
    <h2>Додати новий запис</h2>
    <form>
        <table>
            <tr>
                <th>Дата</th>
                <th>Час</th>
                <th>Зайнято</th>
                <th>Номер телефона</th>
            </tr>
             <tr>
                <td><input type="date" required></td>
                <td><input type="number" style="width:30px" required>:<input type="number" style="width:30px" required></td>
                <td><table cellspacing="10px">
                        <tr>
                            <td>Так</td>
                            <td>Ні</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="radio" name="radio" required></td> 
                            <td><input type="radio" id="radio" name="radio" required checked></td> 
                        </tr>
                    </table></td>
                <td><input type="number"></td>
            </tr>
        </table>
        <input type="submit" value="Add">
    </form>
  </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
 
   export default {
        data: function() {
           return {
           records:[
					{id:1,spec:1,date:"2021/10/28",time:"16:00",isBusy:false,idOfUser:0},
                    {id:2,spec:1,date:"2021/10/28",time:"17:00",isBusy:false,idOfUser:0},
                    {id:3,spec:1,date:"2021/10/30",time:"15:00",isBusy:false,idOfUser:0},
                    {id:4,spec:1,date:"2021/10/30",time:"16:00",isBusy:false,idOfUser:0},
                    {id:5,spec:1,date:"2021/10/31",time:"15:00",isBusy:false,idOfUser:0}
				],
        }},
        mounted: function(){
            
        },
        methods:{
            makeBusy: function(id){
                this.records[this.records.findIndex(rec => id==rec.id)].isBusy = true;
            }
        }
    }
</script>
<style scoped>
    
</style>