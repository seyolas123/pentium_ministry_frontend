<template>

 <div class="bg-gray-500">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="updateProfile" enctype="multipart/form-data">

          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="title" class="block text-sm font-medium text-gray-700"> Phone</label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> title </span>
                    <input type="text" v-model="model.phone" name="title" id="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="The title of the message" />
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700"> Photo </label>
                <div class="mt-1 flex items-center">
                  <span class="inline-block h-40 w-40 rounded-xs object-cover overflow-hidden bg-gray-100">
                    <div v-if="model.avatar_url">
                      <img
                        :src=model.avatar_url
                        :alt="model.name"
                      />
                    </div>

                     <div v-else-if="model.avatar">
                      <img
                        :src="'http://localhost:8000/' + model.avatar"
                        :alt="model.name"
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

 
</template>

<script setup>

import { ref, computed, watch } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();

let model = ref({
    phone: "",
    avatar: null,
    avatar_url: null,
});


function OnPhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    model.value.avatar = reader.result;
    model.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}

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


//onsole.log(model.value);
if (route.params.id) {
  store.dispatch("getUserById", route.params.id);
}


function updateProfile(){
  let action = "created";
  if (model.value.id) {
    action = "updated";
  }
  store.dispatch('updateProfile', { ...model.value })
       .then(({ data }) => {
        
        router.push({name: 'Dashboard'});
       })
       .catch((err) => {

       });
}
 

</script>