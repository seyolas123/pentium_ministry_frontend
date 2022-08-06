<template>
<div class="container mx-auto">
   <div v-if="user.avatar">
      <img style="height:200px;" alt="No image yet" class="w-full" :src="'http://localhost:8000/' + user.avatar" /> 
   </div>
   <div v-else>
     <p>No image yet</p>
   </div>
 

  <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">      
    
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-green-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
           Name: {{ user.name }}</span>
           <span class="inline-block px-2 py-1 leading-none bg-green-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
           Email: {{ user.email }}</span>
          
          <div class="mt-3 flex items-center">
            <span class="text-xs font-semibold">
            
          </span>
          </div>
        </div>
       
        <div class="p-4 flex justify-center items-center text-sm">
         
         <span class="flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        <button @click="deleteUser()" class="text-white hover:text-white-400">Delete</button>

          </span>
          
          </div>
        
      </div>
</div>
   

</template>

<script setup>
import { ref, computed } from "vue";

import store from "../store";
 
 const { user } = defineProps({
  user: Object,
});



const emit = defineEmits(['delete', 'edit']);

function deleteUser() {
    if(
        confirm(`Are you sure you want to delete this user, can't be undone`)
    )
    store.dispatch('deleteUser', user.id)
         .then(() => {
            store.dispatch('getUsers')
         });
}

</script>

<style>
</style>