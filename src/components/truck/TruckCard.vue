<template>
  <div>
    <pre>{{ id }}</pre>
    <pre>{{ setup.idString }}</pre>
  </div>
</template>

<script setup lang="ts">
import TruckCardSetupService from "@/setup/truck/TruckCardSetupService";
const props = defineProps(TruckCardSetupService.props);
const setup = new TruckCardSetupService(props);
</script>
