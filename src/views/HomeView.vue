<script setup>
import Hero from "@/components/Hero.vue";
import Homecard from "@/components/Homecard.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero />
  <Homecard />
  <JobListings :limit="2" :showButton="true"/>
</template>