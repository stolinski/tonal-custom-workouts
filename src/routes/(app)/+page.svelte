<script lang="ts">
	import { queryParam } from 'sveltekit-search-params';

	import Pill from '$/lib/Pill.svelte';
	import WorkoutCard from '$/lib/workouts/WorkoutCard.svelte';
	import { Menu } from '@drop-in/decks';

	const level = queryParam('level');

	let { data } = $props();

	function reset_level() {
		level.set('');
	}
</script>

<section>
	<h1>Workouts</h1>
	<div class="actions">
		{#if data.user}
			<a class="button" href="/new-workout">Submit Your Workouts</a>
		{:else}
			<a class="button" href="/auth/login">Submit Your Workouts</a>
		{/if}
	</div>

	<!-- TODOs Filters, Sort, Search -->
	 <!-- TODO Search via syntax search -->
	 <!-- <search>
		 <input type="text" placeholder="Search...">
		</search> -->
		<div class="flex">
	Filters: <Menu name="level-filter" button_class="ghost">
		{#snippet button()}
				Level
		{/snippet}
		<button class="blank" onclick={() => level.set('beginner')}>Beginner</button>
		<button class="blank" onclick={() => level.set('intermediate')}>Intermediate</button>
		<button class="blank" onclick={() => level.set('advanced')}>Advanced</button>
	</Menu>
	</div>
	{#if data.level}
		<Pill onclick={reset_level}>× {data.level}</Pill>
	{/if}

	<div class="workout-grid grid">
		{#each data.workouts as workout}
			<WorkoutCard {workout} />
		{/each}
	</div>
</section>

<style>
	.actions {
		margin-bottom: 1rem;
	}
</style>
