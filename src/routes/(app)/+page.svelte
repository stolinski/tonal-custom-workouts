<script lang="ts">
	import { queryParam } from 'sveltekit-search-params';
	import { browser } from '$app/environment';
	import Pill from '$/lib/Pill.svelte';
	import WorkoutCard from '$/lib/workouts/WorkoutCard.svelte';
	import { Menu } from '@drop-in/decks';
	import SearchInput from '$/lib/search/SearchInput.svelte';

	const level = queryParam('level');

	let { data } = $props();

	function reset_level() {
		level.set('');
	}
</script>

<section>
	<div class="flex listing-header">
		<h1>Workouts</h1>
		<div class="actions">
			{#if data.user}
				<a class="button" href="/new-workout">Submit Your Workouts</a>
			{:else}
				<a class="button" href="/auth/login">Submit Your Workouts</a>
			{/if}
		</div>
	</div>


	 <search>
		{#if browser}
		 <SearchInput />
		 {/if}

	</search>
		<div class="flex filters">
	Filters: <Menu name="level-filter" button_class="ghost">
		{#snippet button()}
				Level
		{/snippet}
		<button class="blank" onclick={() => level.set('beginner')}>Beginner</button>
		<button class="blank" onclick={() => level.set('intermediate')}>Intermediate</button>
		<button class="blank" onclick={() => level.set('advanced')}>Advanced</button>
	</Menu>
	</div>
	<div class="active-filters">

		{#if data.level}
		<Pill onclick={reset_level}>× {data.level}</Pill>
		{/if}
	</div>

	<div class="workout-grid grid">
		{#each data.workouts as workout}
			<WorkoutCard {workout} />
		{/each}
	</div>
</section>

<style>
	.listing-header {
		justify-content: space-between;
		align-items: center;
		h1 {
			margin: 0;
		}
		margin-block: 2rem 4rem;
	}

	.filters {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	.active-filters {
		margin-bottom: 1rem;
		display: flex;
	}

</style>
