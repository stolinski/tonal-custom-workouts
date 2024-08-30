<script lang="ts">
	import { getContext } from 'svelte';
	import SearchResultList from './SearchResultList.svelte';
	import type { SearchState } from './search-state.svelte';

	let search = getContext<SearchState>('search');
</script>

{#if search?.results?.length > 0}
	<SearchResultList />
{:else if search.query}
	<p class="info">No results</p>
{/if}

<style lang="postcss">
	.info {
		padding: 1rem;
		font-size: 1.2rem;
		text-transform: uppercase;
		background-color: var(--sk-back-2);
		border-radius: 0 0 var(--sk-border-radius) var(--sk-border-radius);
		pointer-events: all;
		margin: 0;
	}
</style>
