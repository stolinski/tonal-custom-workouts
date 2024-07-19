<script lang="ts">
	import WorkoutCard from '$/lib/workouts/WorkoutCard.svelte';

	let { data } = $props();
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
