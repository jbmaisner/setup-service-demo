<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <section>
      <h2>Example of inheritance with LandscapeCard component</h2>
      <h4>
        Its <code>SetupService</code> extends
        <code>BasePhotographyCardSetupService</code>
      </h4>

      <div class="cards-wrapper">
        <LandscapeCard
          title="A desert"
          img="https://picsum.photos/id/46/320/200"
        >
          Cras mattis consectetur purus sit amet fermentum.
        </LandscapeCard>

        <LandscapeCard
          title="A valley"
          img="https://picsum.photos/id/11/320/200"
        >
          Donec id elit non mi porta gravida at eget metus.
        </LandscapeCard>
      </div>
    </section>

    <section>
      <h2>
        Example of a very simple component with IncrementSection component
      </h2>
      <IncrementSection />
    </section>

    <section>
      <h2>Example of inheritance with AnimalCard component</h2>
      <h4>
        Its <code>SetupService</code> extends
        <code>BasePhotographyCardSetupService</code>
      </h4>

      <div class="cards-wrapper">
        <AnimalCard img="https://picsum.photos/id/1084/320/200">
          Cras mattis consectetur purus sit amet fermentum.
        </AnimalCard>

        <AnimalCard img="https://picsum.photos/id/237/320/200">
          Donec id elit non mi porta gravida at eget metus.
        </AnimalCard>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import IncrementSection from "./components/increment/IncrementSection.vue";
import LandscapeCard from "./components/landscape/LandscapeCard.vue";
import AnimalCard from "./components/animal/AnimalCard.vue";
</script>

<style>
html {
  font-family: system-ui, -apple-system, "Open Sans", sans-serif;
  line-height: 1.5;
}

body {
  width: calc(100vw - 2rem);
  max-width: 760px;
  margin: auto;
}

main > section {
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 1px solid grey;
}

h2,
h4 {
  text-align: center;
}

b,
code {
  color: dodgerblue;
}

.logo {
  display: block;
  margin: 3rem auto;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.card {
  background-color: white;
  border-radius: 1rem;
  max-width: 20rem;
  min-width: 15rem;
  box-shadow: 0px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0px 6.7px 5.3px rgba(0, 0, 0, 0.028), 0px 12.5px 10px rgba(0, 0, 0, 0.035),
    0px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0px 41.8px 33.4px rgba(0, 0, 0, 0.05), 0px 100px 80px rgba(0, 0, 0, 0.07);
}

.card__poster {
  display: block;
  border-radius: 1rem 1rem 0 0;
}

.card__body {
  padding: 1rem;
}

.card__title {
  margin: 0 0 0.5rem;
}

.card__details {
  margin-top: 1rem;
  font-family: monospace;
  color: grey;
  font-size: 0.75rem;
}

.card__increment {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 1rem;
  font-size: 0.8rem;
}
</style>
