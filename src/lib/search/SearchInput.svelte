<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount, setContext, tick } from 'svelte';
	import SearchWorker from './search-worker.js?worker';
	import SearchResults from './SearchResults.svelte';
	import { fade } from 'svelte/transition';
	import { create_search } from './search-state.svelte';
	const search = create_search();
	setContext('search', search);

	let search_input: HTMLInputElement | undefined = $state();
	let worker: Worker;
	let ready = false;
	let uid = 1;
	const pending = new Set();

	onMount(async () => {
		worker = new SearchWorker();
		worker.addEventListener('message', (event) => {
			const { type, payload } = event.data;
			if (type === 'ready') {
				ready = true;
			}

			if (type === 'results') {
				search.results = payload.results;
			}
		});

		worker.postMessage({
			type: 'init',
			payload: {
				origin: location.origin,
			},
		});
	});

	afterNavigate(() => {
		close();
	});

	$effect(() => {
		if (ready) {
			const id = uid++;
			pending.add(id);
			worker.postMessage({ type: 'query', id, payload: search.query });
		}
	});
</script>

<input
	onfocus={() => {
		search.status = 'SEARCHING';
	}}
	bind:this={search_input}
	oninput={(e) => {
		const id = uid++;
		pending.add(id);
		search.query = e.currentTarget.value;
		worker.postMessage({ type: 'query', id, payload: search.query });
	}}
	placeholder="Search"
	aria-describedby="search-description"
	aria-label="Search"
	spellcheck="false"
	class="search-input"
/>

<section aria-label="Search Results Window">
	<div class="results">
		{#if search.status === 'SEARCHING'}
			<div transition:fade={{ duration: 300 }} class="results-container">
				<SearchResults />
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	.results {
		padding: 10px 5px;
		min-height: var(--search-height);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		width: 100%;
		position: relative;
		& > * {
			overflow: hidden;
			width: 100%;
			grid-row: 1 / -1;
			grid-column: 1 / -1;
		}
		@media (--above_med) {
			padding: 20px 0;
		}
	}

	.search-input {
		width: 100%;
		border: none;
		padding: 10px 50px 10px 10px;
		font-size: var(--font-size-md);
		outline-color: transparent;
		background-color: transparent;
		color: var(--fg);
		border-radius: 6px;
		border: solid 1px var(--fg);
		font-family: var(--body-font-family);
	}

	footer {
		position: sticky;
		bottom: 0;
		text-align: right;
		p {
			font-size: var(--font-size-smallest);
			color: white;
			font-style: italic;
			background: black;
			padding: 5px 5px;
			margin: 0;
			display: inline-block;
		}
		@media (--below_med) {
			display: none;
		}
	}
	.results-container {
		position: absolute;
		border-radius: 6px;
		background: var(--bg);
		z-index: 10;
	}
</style>
