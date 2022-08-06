<template>
<div class="container mx-auto">

<div>
<img style="height:200px;" class="w-full" :src="'http://localhost:8000/' + message.cover_img" /> 
</div>
  <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
     
        <router-link :to="{ name: 'messageCreate', params: { id: message.id }}" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        </router-link>
    
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-green-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
           Title: {{ message.title }}</span>
           <span class="inline-block px-2 py-1 leading-none bg-green-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
           Author: {{ message.author }}</span>
          
          <div class="mt-3 flex items-center">
            <span class="text-xs font-semibold">
            {{ message.audio }}
             <img style="height:25px;width:100vw" class="h-15" src="/public/audio-gif.gif" />
          </span>
          </div>
        </div>
       
        <div class="p-4 flex justify-center items-center text-sm">
          
          <span class="flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <router-link :to="{ name: 'messageView', params: { id: message.id }}" class="text-white hover:text-white-400">Update</router-link>
          
          </span>
          <span class="text-white text-4xl">|</span>
         <span class="flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        <button @click="deleteMessage()" class="text-white hover:text-white-400">Delete</button>

          </span>
          
          </div>
        
      </div>
</div>
   

</template>

<script setup>
import { ref, computed } from "vue";

import store from "../store";
 
 const { message } = defineProps({
  message: Object,
});



const emit = defineEmits(['delete', 'edit']);

function deleteMessage() {
    if(
        confirm(`Are you sure you want to delete this message, can't be undone`)
    )
    store.dispatch('deleteMessage', message.id)
         .then(() => {
            store.dispatch('getMessages')
         });
}

</script>

<style>
</style>