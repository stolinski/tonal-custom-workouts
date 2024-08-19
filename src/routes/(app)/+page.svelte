<script lang="ts">
	import { queryParam } from 'sveltekit-search-params';

	import Pill from '$/lib/Pill.svelte';
	import WorkoutCard from '$/lib/workouts/WorkoutCard.svelte';

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
