<template>
  <div class="increment-section">
    <div class="increment-section__description">
      Increment <b>globalState.increment</b> via the setter.<br />
      A log will be visible in the console.
      <button @click="setup.increment++">Increment by 1</button>
      <button @click="setup.incrementBy10()">Increment by 10</button>
    </div>

    <div class="increment-section__description">
      Increment <b>globalState.increment</b> directly in the globalState.<br />
      No additional actions will be triggered because we don't use the setter.
      <button @click="setup.incrementDirectlyInStateBy1()">
        Increment by 1
      </button>
      <button @click="setup.incrementDirectlyInStateBy10()">
        Increment by 10
      </button>
    </div>

    <div class="increment-section__description">
      Increment <b>globalState.incrementReadonly</b> via a specific method.<br />
      You can control where and when to update specific properties.
      <button @click="setup.incrementReadonly++">Increment error</button>
      <button @click="setup.incrementTheReadonly()">Increment by 1</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IncrementSectionSetupService from "@/setup/increment/IncrementSectionSetupService";
// This component doesn't use props
// const props = defineProps(IncrementSectionSetupService.props);
const setup = new IncrementSectionSetupService();
</script>

<style scoped>
.increment-section {
  display: flex;
  gap: 3rem;
  margin: 2rem auto;
  padding: 2rem;
}

.increment-section__description {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.8rem;
}
</style>
