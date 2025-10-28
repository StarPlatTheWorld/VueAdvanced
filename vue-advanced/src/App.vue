<template>
  <div class="container">
    <div>{{ message }}</div>
    Contact Owner Name: <input v-model="ownerName" />
    <!-- Local Component -->
    <!-- Local Component Registration scopes the availability of the registered component to the current component only. More tree-shaking friendly.-->
    <!-- <Contact
      name="Ethan"
      :phoneNumber="1231231231"
      :ownerName="contactsOwner"
      email="vamp@test.com"
    />
    <Contact
      name="James"
      :phoneNumber="4564564564"
      :ownerName="contactsOwner"
      email="kaiser@test.com"
    /> -->
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
        <Contact
          :name="contact.name"
          :phoneNumber="contact.phoneNumber"
          :ownerName="contact.ownerName"
          :email="contact.email"
          :isFavorite="contact.isFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Local Component
import { ref, reactive } from "vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import Contact from "./components/Contact.vue";
const message = "Hello Vue";
const ownerName = ref("Test");

const contacts = reactive([
  {
    name: "Ethan",
    phoneNumber: 1231231231,
    ownerName: ownerName,
    email: "test@email.com",
    isFavorite: false,
  },
  {
    name: "James",
    phoneNumber: 4564564564,
    ownerName: ownerName,
    isFavorite: true,
  },
  {
    name: "Bella",
    phoneNumber: 7897897897,
    ownerName: ownerName,
    isFavorite: false,
  },
]);
</script>
