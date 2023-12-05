<script lang="ts" setup>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Section3 from './components/Section3.vue'
import Section4 from './components/Section4.vue'
import Section5 from './components/Section5.vue'
</script>

<template>
  <Navigation />
  <HeroSection />
  <Section1 />
  <Section2 />
  <div :class="$style.bgGrad" class="text-white mt-20 py-10">
    <Section3 />
    <Section4 />
    <Section5 />
  </div>
</template>

<style module>
.bgGrad {
  background: radial-gradient(50% 50% at 50% 50%,
      #010000,
      #050404 18.09%,
      #070606 41.59%,
      #2a2a2e)
}
</style>