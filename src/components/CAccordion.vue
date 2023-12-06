<template>
	<div id="accordion-collapse" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-1">
			<button type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
				@click="handleClick('btn1')">
				<span class="font-bold">Requirements</span>
				<img :src="current === 'btn1' ? '/Icon-minus.svg' : '/Icon-pluse.svg'">
			</button>
		</h2>
		<div id="accordion-collapse-body-1" :class="current === 'btn1' ? '' : 'hidden'">
			<div class="p-5">
				<p class="mb-2 text-gray-500 dark:text-gray-400">Printer must in sound mechanical order</p>
				<p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
						href="/docs/getting-started/introduction/"
						class="text-blue-600 dark:text-blue-500 hover:underline">get
						started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
			</div>
		</div>
		<h2 id="accordion-collapse-heading-2">
			<button type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
				@click="handleClick('btn2')">
				<span>What is your cancellation policy?</span>
				<img :src="current === 'btn2' ? '/Icon-minus.svg' : '/Icon-pluse.svg'">
			</button>
		</h2>
		<div id="accordion-collapse-body-2" :class="current === 'btn2' ? '' : 'hidden'">
			<div class="p-5">
				<p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the
					Figma
					software so everything you see in the library has a design equivalent in our Figma file.</p>
				<p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/"
						class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the
					utility classes
					from Tailwind CSS and components from Flowbite.</p>
			</div>
		</div>
		<h2 id="accordion-collapse-heading-3">
			<button type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
				@click="handleClick('btn3')">
				<span>How does the Trial work?</span>
				<img :src="current === 'btn3' ? '/Icon-minus.svg' : '/Icon-pluse.svg'">
			</button>
		</h2>
		<div id="accordion-collapse-body-3" :class="current === 'btn3' ? '' : 'hidden'">
			<div class="p-5">
				<p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from
					Flowbite are
					open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that
					Flowbite
					relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite,
					Flowbite Pro,
					and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
				<ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
					<li><a href="https://flowbite.com/pro/"
							class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite
							Pro</a></li>
					<li><a href="https://tailwindui.com/" rel="nofollow"
							class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	data() {
		return { current: 'btn1' }
	},
	methods: {
		handleClick(button: string) {
			this.current === button ? this.current = "empty" : this.current = button;
		}
	}
}

</script>