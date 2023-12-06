<template>
    <nav class="flex space-x-2 bg-[#F8F8F8]" aria-label="Tabs" role="tablist">
        <button type="button"
            class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
            id="pills-on-gray-color-item-1" data-hs-tab="#pills-on-gray-color-1" aria-controls="pills-on-gray-color-1"
            role="tab">
            Tab 1
        </button>
        <button type="button"
            class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hover:text-gray-300"
            id="pills-on-gray-color-item-2" data-hs-tab="#pills-on-gray-color-2" aria-controls="pills-on-gray-color-2"
            role="tab">
            Tab 2
        </button>
        <button type="button"
            class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hover:text-gray-300"
            id="pills-on-gray-color-item-3" data-hs-tab="#pills-on-gray-color-3" aria-controls="pills-on-gray-color-3"
            role="tab">
            Tab 3
        </button>
    </nav>

    <div class="mt-3">
        <Section63 />
    </div>
</template>
<script lang="ts" setup>
// import Section61 from './Section6-1.vue';
// import Section62 from './Section6-2.vue';
import Section63 from './Section6-3.vue';
</script>