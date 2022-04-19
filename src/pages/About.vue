<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import welcome from '@/components/welcome.vue'
import { computed } from 'vue';
import { useHead } from '@vueuse/head'

useHead({
  // Can be static or computed
  title: computed(() => "about"),
  meta: [
    {
      name: `description`,
      content: computed(() => "about description"),
    },
  ],
})
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
      <router-link to="/">
        home
      </router-link>
      Hello
    </div>
  </div>
</template>
