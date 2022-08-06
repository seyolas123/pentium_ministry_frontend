<template>
<PageComponent>
 <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Welcome</h1>
      </div>
</template>
 <div class="bg-gray-500">
     <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">

<div class="">
   <div v-if="loading" class="flex justify-center">Loading...</div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700"
    >
      <DashboardCard class="order-1 lg:order-2" style="animation-delay: 0.1s">

        <template v-slot:title>Total Messages</template>
        <div
          class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
        >
          {{ data.totalMessages }}
        </div>
      </DashboardCard>

      <DashboardCard class="order-2 lg:order-4" style="animation-delay: 0.2s">
        <template v-slot:title>Total Users</template>
        <div
          class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
        >
          {{ data.totalUsers }}
        </div>
      </DashboardCard>

     
      <DashboardCard
        class="order-3 lg:order-1 row-span-2"
        style="animation-delay: 0.2s"
      >
        <template v-slot:title>
        <div class="flex justify-between items-center mb-3 px-2">
            <h3 class="text-2xl font-semibold">Latest Message</h3>
             
            <button class="text-blue-500" type="button">
              <router-link class="text-blue" :to="{ name: 'messageView', params: { id: data.latestMessage.id } }">
              Edit Message
              </router-link>
            </button>
          </div>
        </template>
        <div v-if="data.latestMessage">
          
          <h3 class="font-bold text-xl mb-3 ">{{ data.latestMessage.title }}</h3>
          <div class="flex justify-between text-sm mb-1">
            <div>Create Date:</div>
            <div>{{ data.latestMessage.created_at }}</div>
          </div>
        
          <div class="flex justify-between text-sm mb-1">
            <div>Author:</div>
            <div>{{ data.latestMessage.author }}</div>
          </div>

          <div class="flex justify-between text-sm mb-3">
            <div>Audio File:</div>
            <div>{{ data.latestMessage.audio }}</div>
          </div>
          <div class="flex justify-between">
            

          </div>
        </div>
        <div v-else class="text-gray-600 text-center py-16">
          Your don't have messages yet
        </div>
      </DashboardCard>

       <DashboardCard class="order-4 lg:order-3 row-span-2" style="animation-delay: 0.3s">
        <template v-slot:title>
          <div class="flex justify-between items-center mb-3 px-2">
            <h3 class="text-2xl font-semibold">Latest User</h3>
             <p class="divide-x"></p>
            <a
              href="javascript:void(0)"
              class="text-sm text-blue-500 hover:decoration-blue-500"
            >
              View all
            </a>
          </div>
        </template>

        <div v-if="data.latestUser" class="text-left">
          <div>
          
          <h3 class="font-bold text-xl mb-3">{{ data.latestUser.name}}</h3>
          <div class="flex justify-between text-sm mb-1">
            <div>Create Date:</div>
            <div>{{ data.latestUser.created_at }}</div>
          </div>
    
          <div class="flex justify-between text-sm mb-3">
            <div>Email:</div>
            <div>{{ data.latestUser.email}}</div>
          </div>
          <div class="flex justify-between">
            
            <Button type="button">
              <router-link :to="{ name: 'messageView', params: { id: data.latestMessage.id } }">
              Edit Message
              </router-link>
            </Button>

          </div>
        </div>
        
        </div>
        <div v-else class="text-gray-600 text-center py-16">
          You don't have users yet
        </div>
      </DashboardCard>
    </div>
  </div>
</div>
</div>
</PageComponent>
</template>

<script setup>

import PageComponent from "../components/PageComponent.vue";
import DashboardCard from "../components/DashboardCard.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch("getDashboardData");


</script>