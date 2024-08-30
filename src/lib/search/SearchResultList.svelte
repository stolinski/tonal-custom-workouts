<script lang="ts">
	import { getContext } from 'svelte';
	import type { SearchState } from './search-state.svelte';
	import type { Block, Tree } from './search';
	import type { WorkoutsResponse } from '$/types/pocketbase';

	let search = getContext<SearchState>('search');

	function is_tree(show_or_tree: (Block & WorkoutsResponse) | Tree): show_or_tree is Tree {
		return 'node' in show_or_tree;
	}
</script>

<ul>
	{#each search.results as result (result.href)}
		<li>
			<a
				data-sveltekit-preload-data
				href={result.href}
				data-has-node={is_tree(result) ? true : undefined}
			>
				<strong class="wrap">
					{@html result.breadcrumbs[result.breadcrumbs.length - 1]}
				</strong>

				{#if is_tree(result) && result.node?.content}
					<span class="text-sm">{result.node.content}</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		position: relative;
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
		position: relative;
		padding: 0 10px;
		display: flex;
		align-items: center;
		overflow: hidden;
		margin-bottom: 0;
	}

	li:last-child {
		margin-bottom: 0;
	}

	a {
		display: block;
		text-decoration: none;
		line-height: 1;
		padding: 1rem;
		overflow: hidden;
	}

	li:hover {
		background: var(--subtle);
	}

	a strong,
	a span {
		display: block;
		white-space: nowrap;
		line-height: 1.5;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	a strong.wrap {
		white-space: normal;
	}

	a strong {
		color: var(--sk-text-2);
	}

	a span {
		color: #737373;
		margin: 0.4rem 0 0 0;
	}

	a :global(mark) {
		--highlight-color: var(--primary);
		--sk-text-1: var(--black);
	}

	a span :global(mark) {
		background: none;
		color: var(--sk-text-1);
		background: var(--highlight-color);
		border-top: 2px solid var(--highlight-color);
		/* mix-blend-mode: darken; */
	}

	a:focus span {
		color: rgba(255, 255, 255, 0.6);
	}

	a:focus strong {
		color: white;
	}

	a:focus span :global(mark),
	a:focus strong :global(mark) {
		--highlight-color: hsl(240, 8%, 54%);
		mix-blend-mode: lighten;
		color: white;
	}

	a strong :global(mark) {
		color: var(--sk-text-1);
		background: var(--highlight-color);
		/* border-top: 2px solid var(--highlight-color); */
		border-radius: 1px;
	}
</style>
