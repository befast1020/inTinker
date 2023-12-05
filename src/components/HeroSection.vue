<template>
  <div class="mt-20">
    <div class="flex flex-row gap-x-[50px]">
      <div class="w-5/12">
        <p class="text-regal-orange text-[55px] font-bold leading-[3.438rem]">3D PRINTING CALIBRATION <span
            class="text-[#1D1E20]">POWERED
            BY</span> AI</p>
        <p class="mt-5 text-black text-opacity-[0.6] text-[17px] drop-shadow-lg">Streamline setting up new filaments by
          tuning
          Stringing
          and
          Under
          Extrusion
          with an AI powered Calibration system.
        </p>
      </div>
      <div class="w-55/100">
        <img class="w-full" src="/reddit-landing-hero.svg" alt="Landing Hero" />
      </div>
    </div>
    <div>
      <div class="flex flex-row">
        <StarIcon class="h-7 w-7 text-yellow-500" />
        <StarIcon class="h-7 w-7 text-yellow-500" />
        <StarIcon class="h-7 w-7 text-yellow-500" />
        <StarIcon class="h-7 w-7 text-yellow-500" />
        <StarIcon class="h-7 w-7 text-yellow-500" />
      </div>
      <h5 class="text-[#1D1E20] font-bold">2,400 + Happy Users</h5>
    </div>
    <div class="flex flex-row items-center">
      <div class="basis-7/12">
        <div class="flex flex-row items-center gap-x-3">
          <button
            class="bg-regal-orange text-white text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-2 px-4 rounded">
            Start Calibration for FREE
          </button>
          <div class="flex items-center border-b-2 border-black">
            <p class="text-[18px] font-semibold">
              How it works
            </p>
            <ChevronRightIcon class="h-5 w-5 text-black-500" />
          </div>
        </div>
      </div>
      <div class="basis-2/3 flex flow-row items-center gap-x-6">
        <img src="/Group 6021.svg" alt="Group 6021" />
        <p class="text-[38px] text-regal-orange font-bold">Hero</p>
        <img src="/Group 6017.svg" alt="Group 6017" />
        <p class="text-[20px] text-black font-bold">Zero</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StarIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>