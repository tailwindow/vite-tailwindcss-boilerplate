<script setup>
import welcome from '@/components/welcome.vue'
import { computed } from 'vue';
import { useHead } from '@vueuse/head'

useHead({
   // Can be static or computed
  title: computed(() => "title"),
  meta: [
    {
      name: `description`,
      content: computed(() => "description"),
    },
  ],
})

</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
      <router-link to="/about">
        about
      </router-link>
      <welcome />
    </div>
  </div>
</template>
