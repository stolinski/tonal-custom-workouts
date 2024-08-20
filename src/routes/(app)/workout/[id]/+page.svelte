<script lang="ts">
	import Pill from '$/lib/Pill.svelte';
	import QR from '$/lib/QR.svelte';

	let { data } = $props();
</script>

<section class="layout content">
	<div class="content">
		<Pill link="/?level={data.workout.level}">{data.workout.level}</Pill>
		<h1>{data.workout.name}</h1>

		<p>{data.workout.description}</p>
		<p>{data.workout.long_description}</p>

		<div class="actions">
			<a class="button" href={data.workout.link}>Get this workout</a>
			<button class="ghost">Bookmark</button>
		</div>
		<QR link={data.workout.link} />
	</div>
</section>

<style>
	.actions {
		margin-bottom: 2rem;
	}
</style>
