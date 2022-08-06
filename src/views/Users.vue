<template>
<PageComponent>

 <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">All users</h1>
         
      </div>
</template>

  <div class="bg-gray-500">
     <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
     
     <div v-if="users.loading">
        <div class="flex justify-center">Loading...</div>
      </div>

      <div v-else-if="users.data.length">

     <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
     
      <userList
        v-for="(user, index) in users.data"
        :key="user.id"
        :user ="user"
        class="opacity-0 animate-fade-in-down"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @delete="deleteUser(user)"
        @edit="editMessage(user.id)"
       />
      </div>

      <div class="flex justify-center mt-5">
        <nav
          class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a
            v-for="(link, i) of users.links"
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
              i === users.links.length - 1 ? 'rounded-r-md' : '',
            ]"
            v-html="link.label"
          >
          </a>
        </nav>
      </div>
     </div>

      <div v-else>
        <div class="flex justify-center">
        No users Available
        </div>
     </div>

  </div>
</div>

<div class="divide-y"></div>

</PageComponent>

  
</template>

<script setup>
import userList from "../components/userList.vue";
import PageComponent from "../components/PageComponent.vue";
import store from "../store";
import { computed } from "vue";

const users = computed(() => store.state.users);

//console.log(users)
store.dispatch("getUsers");

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }

  store.dispatch("getUsers", { url: link.url });
}

function deleteUser(user) {
    if(
        confirm(`Are you sure you want to delete this user, can't be undone`)
    )
    store.dispatch('deleteUser', user.id)
         .then(() => {
            store.dispatch('getUsers')
         });
}

function banUser(user) {
    if(
        confirm(`Are you sure you want to ban this user, can't be undone`)
    )
    store.dispatch('deleteUser', user.id)
         .then(() => {
            store.dispatch('getUsers')
         });
}
  
</script>