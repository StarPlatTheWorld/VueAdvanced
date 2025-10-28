<template>
  <div class="bg-info rounded p-1 pb-4 m-2">
    <div class="row">
      <div class="col-6">
        <h3>Name: {{ name }}</h3>
        <p>Email: {{ email }}</p>
        <p>Phone Number: {{ phoneNumber }}</p>
      </div>
      <div class="col-3">
        <p>Favorite: {{ isFavorite }}</p>
      </div>
      <span class="float-end small" v-if="ownerName != ''">
        *this contact info belongs to {{ ownerName }}
      </span>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// When passing props, if a local variable shares the same name it will take preference. Take care when naming props so no clash between props and local variables/objects.
// const email = ref("starplattheworld@github.com");
const props = defineProps({
  name: { type: String, required: true },
  phoneNumber: Number,
  ownerName: String,
  email: { type: String, required: false, default: "N/A" },
  isFavorite: Boolean,
});
</script>
