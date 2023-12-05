<template>
  <div class="mx-auto px-5 sm:px-6 lg:px-16 mt-6">
    <div class="font-Roboto font-bold text-md"># WHAT WE DO</div>
    <div class="w-6/12 font-bold text-sm text-black text-opacity-60">Use our AI powered calibration to tune new filaments
      or improve
      the print
      quality of
      ones
      you’ve
      been using by
      tuning retraction and temperature settings.
    </div>
    <div class="flex justify-between px-10 mt-12">
      <img src="/img(sec1-1).svg" />
      <img src="/img(sec1-2).svg" />
    </div>
    <div class="flex justify-between px-10">
      <div class="mt-8">
        <div class="font-Roboto font-bold text-md">Past</div>
        <div class="font-bold text-sm text-black text-opacity-60 w-2/3">Looking through reddit,facebook and youtube
          to
          find solutions</div>
        <div class="mt-2">
          <div class="flex font-bold text-sm items-center">
            <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
            <div>Slow</div>
          </div>
          <div class="flex font-bold text-sm items-center">
            <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
            Not Applicable to you
          </div>
          <div class="flex font-bold text-sm items-center">
            <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
            Conflicting advise
          </div>
          <div class="flex  font-bold text-sm items-center">
            <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
            Incorrect advice
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="font-Roboto font-bold text-md">Now</div>
        <div class="font-bold text-sm text-black text-opacity-60 w-2/3">A digital notebook infused with AI to run
          calibrations.</div>
        <div class="mt-2">
          <div class="flex font-bold text-sm items-center">
            <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
            Quick
          </div>
          <div class="flex font-bold text-sm items-center">
            <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
            Customized for you Setup
          </div>
          <div class="flex font-bold text-sm items-center">
            <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
            One source of truth
          </div>
          <div class="flex font-bold text-sm items-center">
            <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
            Data driven solutions
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { XCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>