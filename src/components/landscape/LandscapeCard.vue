<template>
  <div class="card">
    <img :src="img" :alt="title" class="card__poster" />
    <div class="card__body">
      <h3 class="card__title">{{ setup.formattedTitle }}</h3>
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
        See <b>LandscapeCard.vue</b> and <b>LandscapeCardSetupService.ts</b> for
        details
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LandscapeCardSetupService from "@/setup/landscape/LandscapeCardSetupService";
const props = defineProps(LandscapeCardSetupService.props);
const setup = new LandscapeCardSetupService(props);
</script>
