<template>
  <div class="card">
    <img :src="img" class="card__poster" />
    <div class="card__body">
      <slot />

      <div class="card__increment">
        <span>
          Increment: <b>{{ setup.increment }}</b>
        </span>
        <span>
          Increment readonly: <b>{{ setup.incrementReadonly }}</b>
        </span>
      </div>

      <div class="card__details">
        See <b>AnimalCard.vue</b> and <b>AnimalCardSetupService.ts</b> for
        details
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimalCardSetupService from "@/setup/animal/AnimalCardSetupService";
const props = defineProps(AnimalCardSetupService.props);
const setup = new AnimalCardSetupService(props);
</script>
