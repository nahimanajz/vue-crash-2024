<script setup>
import jobData from "@/jobs.json";
import { reactive, defineProps, onMounted } from "vue";
import Joblist from "./Joblist.vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const state = reactive({
  jobs: [],
  isLoading: true,
});
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
  },
});
onMounted(async () => {
  try {
    const { data } = await axios.get("http://localhost:5001/jobs");
    state.jobs = data;
  } catch (error) {
    console.log("Error fetching ...", error);
    state.isLoading = false;
  }
});
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Joblist
        v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs
    </RouterLink>
  </section>
</template>
