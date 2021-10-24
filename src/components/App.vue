<template> 
  <table class="records">
				<tr>
					<th>Date</th>
					<th>Time</th>
					<th>Is Busy</th>
				</tr>
				<tr v-for="rec in records" v-bind:key="rec.date" v-bind:style="rec.isBusy ? 'background-color:rgb(128, 128, 128)' : 'background-color: #FFF'">
					<td>{{rec.date}}</td>
					<td>{{rec.time}}</td>
					<td>{{rec.isBusy}}</td>
                    <td><button v-on:click="makeBusy(rec.time)">Зайняти</button></td>
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
					{date:"21.10.2021",time:"14:00",isBusy:true},
					{date:"21.10.2021",time:"15:00",isBusy:true},
					{date:"21.10.2021",time:"16:00",isBusy:false},
					{date:"21.10.2021",time:"17:00",isBusy:false}
				],
           
        }},
        mounted: function(){
    
        },
        methods:{
            makeBusy: function(time){
                this.records[this.records.findIndex(rec => time==rec.time)].isBusy = true;
            }
        }
    }
</script>
<style scoped>
    
</style>