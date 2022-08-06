<template>
<PageComponent>
 <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">
            {{ route.params.id ? model.title : "Create a Message" }}
            </h1>
        
      </div>
</template>
 <div class="bg-gray-500">
     <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <div v-if="msg.loading">
           
          </div>
          <div v-else>
            <h3 class="text-lg font-medium leading-6 text-gray-900">Pls Note -> Messags Here</h3>
            <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>
          
        </div>
      </div>

      <div v-if="msg.loading">
        <div class="flex justify-center">Loading...</div>
      </div>

      <div v-else class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="storeMessage" enctype="multipart/form-data">

          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="title" class="block text-sm font-medium text-gray-700"> Message Title </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> title </span>
                    <input type="text" v-model="model.title" name="title" id="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="The title of the message" />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="author" class="block text-sm font-medium text-gray-700"> Message Author</label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> Author </span>
                    <input type="text" v-model="model.author" name="author" id="author" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="The Author of the message" />
                  </div>
                </div>
              </div>

               <div>
                <label class="block text-sm font-medium text-gray-700"> File </label>

                <div class="mt-1 flex items-center">
                  
                    <div>
                      <span  class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  
                    <div>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
<path style="fill:#0EE0B8;" d="M402,0H90C76.4,0,66,10.4,66,24v320l154.4,148H402c13.6,0,24-10.4,24-24V24C426,10.4,415.6,0,402,0z"
	/>
<path style="fill:#282827;" d="M402,0H90C76.4,0,66,10.4,66,24v320l154.4,148H402c13.6,0,24-10.4,24-24V24C426,10.4,415.6,0,402,0z"
	/>
<path style="fill:#212121;" d="M426,383.2V24c0-13.6-10.4-24-24-24H90C76.4,0,66,10.4,66,24"/>
<path d="M426,383.2V24c0-13.6-10.4-24-24-24H205.2"/>
<path style="fill:#212121;" d="M200.4,348.8v120c0,1.6,0,3.2,0.8,4.8l18.4,17.6c1.6,0,2.4,0.8,4,0.8h125.6L200.4,348.8L200.4,348.8z
	"/>
<path d="M200.4,348.8v120c0,1.6,0,3.2,0.8,4.8l18.4,17.6c1.6,0,2.4,0.8,4,0.8h64l-72-120L200.4,348.8z"/>
<path style="fill:#F73974;" d="M220.4,491.2L220.4,491.2v-124c0-13.6-10.4-24-24-24H66L220.4,491.2z"/>
<polyline style="fill:#ED266E;" points="66,344 220.4,491.2 220.4,491.2 220.4,368 "/>
<path style="fill:#707070;" d="M77.2,344L77.2,344V24c0-13.6,10.4-24,24-24H90.8c-13.6,0-24,10.4-24,24v320l0,0H77.2z"/>
<path style="fill:#F73974;" d="M213.2,138.4c0-4-3.2-7.2-7.2-7.2s-7.2,3.2-7.2,7.2v116c-3.2,3.2-8.8,8-16,16c-4,4-25.6,32-18.4,48.8
	c4,8.8,24.8,5.6,36.8-6.4c7.2-7.2,11.2-16.8,11.2-24.8l0,0V138.4H213.2z"/>
<path style="fill:#ED266E;" d="M213.2,243.2V138.4c0-4-3.2-7.2-7.2-7.2s-7.2,3.2-7.2,7.2v52.8L213.2,243.2z"/>
<path style="fill:#F73974;" d="M323.6,115.2c0-4-3.2-7.2-7.2-7.2s-7.2,3.2-7.2,7.2v116c-3.2,3.2-8.8,8-16,16c-4,4-25.6,32-18.4,48.8
	c4,8.8,24.8,5.6,36.8-6.4c8-7.2,11.2-16.8,11.2-24.8l0,0V115.2H323.6z"/>
<path style="fill:#ED266E;" d="M323.6,263.2v-148c0-4-3.2-7.2-7.2-7.2s-7.2,3.2-7.2,7.2V172L323.6,263.2z"/>
<g>
	<polygon style="fill:#DD0772;" points="198.8,192.8 213.2,207.2 213.2,163.2 198.8,176.8 	"/>
	<polygon style="fill:#DD0772;" points="310,179.2 323.6,192.8 323.6,126.4 310,140 	"/>
</g>
<path style="fill:#F73974;" d="M326.8,91.2c-0.8-0.8-2.4-0.8-4-0.8L198,124c-2.4,0.8-3.2,2.4-3.2,4.8V188c0,1.6,0.8,3.2,1.6,4
	s1.6,0.8,3.2,0.8c0.8,0,0.8,0,1.6,0L326,159.2c2.4-0.8,3.2-2.4,3.2-4.8V95.2C328.4,93.6,327.6,92,326.8,91.2z"/>
<path style="fill:#ED266E;" d="M325.2,159.2c2.4-0.8,3.2-2.4,3.2-4.8V95.2c0-1.6-0.8-3.2-1.6-4c-0.8-0.8-2.4-0.8-4-0.8L198,124
	c-2.4,0.8-3.2,2.4-3.2,4.8"/>
<path style="fill:#DD0772;" d="M325.2,159.2c2.4-0.8,3.2-2.4,3.2-4.8V95.2c0-1.6-0.8-3.2-1.6-4"/>
<g>
	<path style="fill:#ED266E;" d="M164.4,319.2c4,8.8,24.8,5.6,36.8-6.4c7.2-7.2,11.2-16.8,11.2-24.8l0,0"/>
	<path style="fill:#ED266E;" d="M275.6,296c4,8.8,24.8,5.6,36.8-6.4c8-7.2,11.2-16.8,11.2-24.8l0,0"/>
</g>

                    </svg>
                    </div>
                    
                  </span>
                    </div>
                  
                  <input @change="OnFileChoose" type="file" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700"> Photo </label>
                <div class="mt-1 flex items-center">
                  <span class="inline-block h-40 w-40 rounded-xs object-cover overflow-hidden bg-gray-100">
                    <div v-if="model.photo_url">
                      <img
                        :src=model.photo_url
                        :alt="model.title"
                      />
                    </div>

                     <div v-else-if="model.cover_img">
                      <img
                        :src="'http://localhost:8000/' + model.cover_img"
                        :alt="model.title"
                      />
                    </div>

                    <div v-else>
                       <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    </div>
                    
                  </span>
                   <button
                type="button"
                class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <input
                  type="file"
                  @change="OnPhotoChoose"
                  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                />
                Change
              </button>
                </div>
              </div>

            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button id="subBtn" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
  </div>

</PageComponent>
</template>

<script setup>

import PageComponent from "../components/PageComponent.vue";
import { ref, computed, watch } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";
//import router from "../router";



const router = useRouter();

const route = useRoute();

let model = ref({
    title: "",
    author: "",
    audio: null,
    cover_img: null,
    photo_url: null,
});

// Watch to current survey data change and when this happens we update local model
watch(
  () => store.state.currentMessage.data,
  (newVal, oldVal) => {
    model.value = {
      ...JSON.parse(JSON.stringify(newVal)),
      status: !!newVal.status,
    };
  }
);

if (route.params.id) {
  store.dispatch("getMessage", route.params.id);
}

function OnFileChoose(ev) {
   const file = ev.target.files[0];

   const reader = new FileReader();
   reader.onloadend = () => {
    model.value.audio = reader.result;
    //model.value.audio_url = reader.result;
   };

   reader.readAsDataURL(file);
}

function OnPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    model.value.cover_img = reader.result;
    model.value.photo_url = reader.result;
  };

  reader.readAsDataURL(file);
}

//console.log(model.value);

const msg = computed(() => store.state.currentMessage);

function storeMessage(){

  let action = "created";
  if (model.value.id) {
    action = "updated";
  }

  store.dispatch('saveMessage', { ...model.value })
       .then(({ data }) => {
        store.commit("notify", {
          message: "Message succesfully created",
          type: "success"
        });
        router.push({name: 'Messages'});
       })
       .catch((err) => {

       });
}
 

</script>