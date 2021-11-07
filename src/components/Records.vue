<template> 
  <table class="records">
				<tr>
					<th>Date</th>
					<th>Time</th>
					<th>Is Busy</th>
				</tr>
				<tr v-for="rec in records" v-bind:key="rec.id" v-bind:style="rec.isBusy ? 'background-color:rgb(128, 128, 128)' : 'background-color: #FFF'">
					<td>{{rec.date}}</td>
					<td>{{rec.time}}</td>
					<td>{{rec.isBusy}}</td>
                    <td><button v-on:click="makeBusy(rec.id)">Зайняти</button></td>
				</tr>
			</table>
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