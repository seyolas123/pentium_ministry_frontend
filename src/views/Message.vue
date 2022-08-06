<template>
<PageComponent>

 <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">All Messages</h1>
         <span class="flex focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <router-link :to="{ name: 'messageCreate', params: { id: messages.data.id }}" class="text-white hover:text-white-400">Create New</router-link>

          </span>
      </div>
</template>

  <div class="bg-gray-500">
     <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
     
     <div v-if="messages.loading">
        <div class="flex justify-center">Loading...</div>
      </div>

      <div v-else-if="messages.data.length">

     <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
     
      <MessageList
        v-for="(message, index) in messages.data"
        :key="message.id"
        :message ="message"
        class="opacity-0 animate-fade-in-down"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @delete="deleteMessage(message)"
        @edit="editMessage(message.id)"
       />
      </div>

      <div class="flex justify-center mt-5">
        <nav
          class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a
            v-for="(link, i) of messages.links"
            :key="i"
            :disabled="!link.url"
            href="#"
            @click="getForPage($event, link)"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
            :class="[
              link.active
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              i === 0 ? 'rounded-l-md bg-gray-100 text-gray-700' : '',
              i === messages.links.length - 1 ? 'rounded-r-md' : '',
            ]"
            v-html="link.label"
          >
          </a>
        </nav>
      </div>
     </div>

      <div v-else>
        <div class="flex justify-center">
        No messages Available
        </div>
     </div>

  </div>
</div>

<div class="divide-y"></div>

</PageComponent>

  
</template>

<script setup>
import MessageList from "../components/MessageList.vue";
import PageComponent from "../components/PageComponent.vue";
import store from "../store";
import { computed } from "vue";

const messages = computed(() => store.state.messages);

//console.log(messagess)
store.dispatch("getMessages");

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }

  store.dispatch("getMessages", { url: link.url });
}

function deleteMessage(message) {
    if(
        confirm(`Are you sure you want to delete this message, can't be undone`)
    )
    store.dispatch('deleteMessage', message.id)
         .then(() => {
            store.dispatch('getMessages')
         });
}
   
</script>